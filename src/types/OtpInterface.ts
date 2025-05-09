import mongoose, { Document } from 'mongoose'

export interface OtpInterface extends Document {
  _id: mongoose.Types.ObjectId
  userId: string
  otp: string,
  createdAt: Date,
  expiresAt: Date
}
