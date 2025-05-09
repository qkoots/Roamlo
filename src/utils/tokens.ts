// Libraries
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import uuidv4 from 'uuid4';
import { RefreshTokenInterface } from '../types/RefreshTokenInterface'
import { RefreshToken } from '../models/RefreshToken'
dotenv.config()

export const maxAge: number = 5 * 24 * 60 * 60 * 1000 // 5 days

export const generateAccessToken = (userId: mongoose.Types.ObjectId): string => {
  const jwtSecretKey: string = process.env.ACCESS_TOKEN_SECRET_KEY as string || ''
  return jwt.sign({ userId }, jwtSecretKey, { algorithm: 'HS256', expiresIn: '40s' })
}

export const generateRefreshToken = (userId: mongoose.Types.ObjectId): string => {
  const jwtSecretKey: string = process.env.REFRESH_TOKEN_SECRET_KEY as string || ''
  return jwt.sign({ userId }, jwtSecretKey, { algorithm: 'HS256' })
}

export const saveRefreshToken = async (userId: any, refreshToken: string) => {
  try {
   const refreshTokenId = uuidv4(); 
   const refToken: RefreshTokenInterface = await RefreshToken.create({
    userId,
    tokenId: refreshTokenId,
    token: refreshToken,
   })

   // Save the refresh token to the database
   await refToken.save()

   return refreshTokenId

  } catch (error) {
    console.error('Error saving refresh token:', error)
    return error
  }
}