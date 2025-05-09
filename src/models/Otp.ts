// Libraries
import { model, Schema } from 'mongoose'

// Interfaces
import { OtpInterface } from '../types/OtpInterface'

const otpSchema = new Schema<OtpInterface>({
  userId: {
    type: String,
    required: true
  },
  otp: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  }
})

export const OTP = model<OtpInterface>('OTP', otpSchema)
