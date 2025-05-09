//@ts-nocheck

// Libraries
import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import { StatusCodes } from 'http-status-codes'
import { Nodemailer } from '../utils/nodemailer'

// Models
import { User } from '../models/User'
import { RefreshToken } from '../models/RefreshToken'
import { OTP } from '../models/Otp'

// Validation
import { userValidation } from '../validation/validation'

import { generateAccessToken, generateRefreshToken, saveRefreshToken, maxAge} from '../utils/tokens'

// Interfaces
import { UserInterface } from '../types/UserInterface'
import { RefreshTokenInterface } from '../types/RefreshTokenInterface'

// Error Handler
import { BadRequest, Conflict, NotFound } from '../utils/error'


// Only auth Users can access this page
export const authPage = (_req: Request, res: Response): any => {
  return res.status(StatusCodes.OK).json({
    auth: true
  })
}

export const signUp = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // Validation User Input
    const { error } = userValidation.validate(req.body)
    if (error) throw new BadRequest(error.details[0].message)

    // read from body
    const { name, email, password } = req.body

    // check if user already exist
    const oldUser: UserInterface | null = await User.findOne({ email })

    if (oldUser) {
      throw new Conflict('Email is already in exists. Use another email address to sign up')
    } else {
      // encrypt the password
      const salt: string = await bcrypt.genSalt(10)
      const encryptedPassword: string = await bcrypt.hash(password, salt)

      // create user
      const user: UserInterface = await User.create({
        name: name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        role: 'user',
        verified: false
      })

      // Save the User
      await user
        .save()
        .then(result => {
          sendOTPVerification(result, res)
        })
    }
  } catch (error) {
    return next(error)
  }
}

export const logIn = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validation User Input
  try {
    // Check if user already exists
    const user: UserInterface | null = await User.findOne({ email: req.body.email })
    if (!user) throw new NotFound("User not found. Please sign up first!")

    // Compare the passwords
    const password: boolean = await bcrypt.compare(req.body.password, user.password)
    if (!password) throw new BadRequest('Invalid email or password...')

    // Create Tokens
    const accessToken = generateAccessToken(user._id)
    const refreshToken = generateRefreshToken(user._id)

    const savedRefTokenId = await saveRefreshToken(user._id, refreshToken)
    res.cookie('rl_rtk', savedRefTokenId, {
      httpOnly: process.env.NODE_ENV === 'production'? true : false,
      secure: process.env.NODE_ENV === 'production' ? true : false,
      sameSite: process.env.NODE_ENV === 'production' ? 'Strict' : 'none',
      maxAge: maxAge
    })

    return res.status(200).json({
      status: 'success',
      user,
      accessToken
    })

  } catch (error) {
    console.log('Error in login:', error)
    return next(error)
  }
}

export const updateAccount = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // read from body
    let { userId, name, email, password } = req.body
    let doc

    if (password) {
      // Encrypt the password
      const salt: string = await bcrypt.genSalt(10)
      password = await bcrypt.hash(password, salt)

      doc = await User.findOneAndUpdate(
        { _id: userId },
        { name, email, password }
      )
    } else {
      doc = await User.findOneAndUpdate(
        { _id: userId },
        { name, email }
      )
    }

    if(!doc) throw new BadRequest(`Something went wrong. Profile not updated!`)

    return res.status(200).json({
      message: `Account settings updated successfully!`,
      updated: true,
      doc
    })
  } catch (error) {
    return next(error)
  }
}

export const resetPasswordLink = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    
    // Read from body
    const { email } = req.body

    const doc = await User.findOne({ email: email })

    if(!doc) throw new NotFound(`Email address does not exist!`)

    let nodeMailerResult
    const nodemailer = new Nodemailer()

    nodeMailerResult = await nodemailer.sendEmail({
      to: doc.email,
      subject: "Password Reset!",
      html: `
      <div>
        <h1>Reset your password</h1>
        <p>To complete the reset password process, click on the link below: </p>
        <a href="${process.env.FRONTEND_HOST}/reset-password?email=${doc.email}&id=${doc._id}">Reset Password</a>
      </div>
      `
    })

    if (nodeMailerResult.accepted.length === 0) {
      throw new Error('Something went wrong while sending e-mail. Try again or contact support')
    }

    return res.status(200).json({
      message: `Please check your e-mail inbox for a link to complete the process.`
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const resetPassword = async (req: Request, res: Response, next: NextFunction): Promise<any> => { 
  // Read from body
  const { email, id, newPassword } = req.body

  try {
    if (!email) throw 'Email not found'
    if (!id) throw 'User not found'

    const doc = await User.findById({ _id: id })

    if(!doc) throw new NotFound(`E-mail address doesn't exist`)

    const salt: string = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(newPassword, salt)
    doc.password = password
    await doc.save()

    let nodeMailerResult
    const nodemailer = new Nodemailer()
      
    const url = `${process.env.FRONTEND_HOST}/login`
    nodeMailerResult = await nodemailer.sendEmail({
      to: doc.email,
      subject: "Password reset confirmation!",
      html: `<p style="color: red;">Your password has been successfully updated!</p> <a href="` + url + `">Log in</a>` //TODO: confirm message
    })

    if (nodeMailerResult.accepted.length === 0) {
      throw new Error('Something went wrong. Try again or contact support')
    }
    
    return res.status(200).json({ 
      message: 'Password saved successfully!',
      success: true
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const logout = async (_req: Request, res: Response, _next: NextFunction): Promise<any> => {
  try {
    const cookie = _req.headers.cookie

    const tokenId = cookie.split('=')[1]
    
    // Retrieve refresh token from the database
    const refreshTokenData = await RefreshToken.findOneAndDelete({ tokenId })

    return res.clearCookie('rl_rtk').status(200).json({
      logout: true,
      message: 'Successfully Log Out'
    })
  } catch (error) {
    console.log(`Error in logout controller: `+ error);

    return res.clearCookie('rl_rtk').status(200).json({
      logout: true,
      message: 'Successfully Log Out'
    })
  }
  
}

const sendOTPVerification = async({ _id, email }, res) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`
    const hashedOTP = await bcrypt.hash(otp, 10)
    const newOTP = await new OTP({
      userId: _id,
      otp: hashedOTP,
      createdAt: Date.now(),
      expiresAt: Date.now() + 600000 // expire in 10 minutes
    })

    await newOTP.save()

    const nodemailer = new Nodemailer()
    await nodemailer.sendEmail({
      to: email,
      subject: "Verify your e-mail",
      html: `
      <div>
        <h1>Reset your password</h1>
        <h3><b>${otp}</b></h3>
      </div>
      `
    })

    res.status(200).json({
      status: 'Pending',
      message: 'verification email was send to your email address',
      data: {
        userId: _id,
        email
      }
    })

  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'An error occurred while saving user account!'
    })
    console.log(error);
  }
}

export const verifyOTP = async(req, res) => {
  try {
    const { userId, otp } = req.body
    if (!userId || !otp) {
      throw Error('Empty otp details are not allowed')
    } else {

      const userOTPRecord = await OTP.find({ userId })
      if (userOTPRecord.length <= 0) {
        throw Error ('Account doesn\'t exist or has already been verified. Please sign up or log in')

      } else {
        const { expiresAt } = userOTPRecord[0]
        const hashedOTP = userOTPRecord[0].otp

        if (expiresAt < Date.now()) {
          await OTP.deleteMany({ userId })
          throw new Error('The verification code has expired. Please request a new code.')
        } else {
          const validOTP = await bcrypt.compare(otp, hashedOTP)
          if (!validOTP) {
            throw new Error("Invalid code passed. Re-enter the code.")
          } else {

            await User.updateOne( { _id: userId }, { verified: true })
            await OTP.deleteMany({ userId })
            res.status(200).json({
              status: "Verified",
              message: "Your e-mail has been successfully verified."
            })
          }
        }
      }
    }

  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error.message
    })
    console.log(error);
  }
}

export const resendOTP = async(req, res) => {
  try {
    const { userId, email } = req.body
    if (!email) {
      throw new Error('Empty user details are not allowed')
    } else {
      await OTP.deleteMany({ userId })
      sendOTPVerification({ _id: userId, email }, res)
    }
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error.message
    })
    console.log(error);
  }
}