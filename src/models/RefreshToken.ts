// Libraries
import { model, Schema } from 'mongoose'

// Interfaces
import { RefreshTokenInterface } from '../types/RefreshTokenInterface'

const refreshTokenSchema = new Schema<RefreshTokenInterface>({
  tokenId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: false
  }
})

export const RefreshToken = model<RefreshTokenInterface>('refreshTokenSchema', refreshTokenSchema)
