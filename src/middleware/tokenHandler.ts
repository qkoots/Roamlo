// Libraries
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

import { Authorized, BadRequest } from '../utils/error'
// models
import { RefreshToken } from '../models/RefreshToken'
// Middlewares
import { generateAccessToken, generateRefreshToken, saveRefreshToken, maxAge} from '../utils/tokens'

// Extend the Request interface to include the 'userData' property
declare global {
  namespace Express {
    interface Request {
      userData?: any; // Define the 'userData' property with its type
    }
  }
}

// Middleware to authenticate token
export const authenticateToken = (req: any, _res: Response, next: NextFunction): void => {
  // take the jwt cookie from headers
  const authHeader: string | undefined = req.headers['authorization']

  // if token exists then split
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    // next('Access denied. Not authorized...')
    throw new Authorized('Invalid token')
  } 
  
  try {
    const jwtSecretKey: string = process.env.ACCESS_TOKEN_SECRET_KEY ? process.env.ACCESS_TOKEN_SECRET_KEY : ''
    const decoded = jwt.verify(token, jwtSecretKey)
    req.user = decoded
    return next()

  } catch (error) {
    next(error)
    if (error.message === 'jwt expired') {
      throw new BadRequest('jwt token has expired..')
    } else {
      throw new Authorized(error.message)
    }
  }
}

// Middleware to verify refresh token
export const verifyRefreshToken = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const cookie = req.headers.cookie

    if (!cookie) {
      return res.status(401).json({ message: 'No refresh token provided' })
    }

    const tokenId = cookie.split('=')[1]

    // Retrieve refresh token from the database
    const refreshTokenData = await RefreshToken.findOne({ tokenId })

    if (!refreshTokenData || !refreshTokenData.token){
      return res.status(401).json({ message: 'Refresh token not found' })
    }

    jwt.verify(refreshTokenData.token, process.env.REFRESH_TOKEN_SECRET_KEY as string, (err: any, decoded: any) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid refresh token' })
      }

      if (!decoded) {
        return res.status(403).json({ message: 'User data missing in token' })
      }
  
      // Attach userData to the request
      req.userData = {
        userId: decoded.userId, 
        oldTokenId: refreshTokenData._id 
      }

      return next()
    })
  } catch (error) {
    console.log(`Error in verifyRefreshTokenMiddleware: ${error}`)
    next(error)
  }
}

// Middleware to refresh token
export const refreshToken = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Note: Token verification is done by the middleware in tokenHandler.ts
  try {
    
    // Data attached by the verifyRefreshToken middleware
    const { userId, oldTokenId } = req.userData

    // Generate new access and refresh token
    const newAccessToken = generateAccessToken(userId)
    const newRefreshToken = generateRefreshToken(userId);
    
    // Delete old refresh token
    await RefreshToken.findOneAndDelete({ _id: oldTokenId })

    const savedRefTokenId = await saveRefreshToken(userId, newRefreshToken)
      res.cookie('rl_rtk', savedRefTokenId, {
        httpOnly: process.env.NODE_ENV === 'production'? true : false,
        secure: process.env.NODE_ENV === 'production' ? true : false,
        sameSite: process.env.NODE_ENV === 'production' ? 'Strict' : 'none',
        maxAge
      })

    return res.status(200).json({
      accessToken: newAccessToken
    })
  } catch (error) {
    console.log('Error in refreshToken:', error)
    return next(error)
  }
 
}