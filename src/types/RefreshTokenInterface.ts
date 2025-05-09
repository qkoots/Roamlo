import mongoose, { Document } from 'mongoose'

export interface RefreshTokenInterface extends Document {
  _id: string
  tokenId: string
  token: string
  userId: string,
  expireAt: Date
}
