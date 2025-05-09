// Libraries
import { model, Schema } from 'mongoose'
// Interfaces
import { UserInterface } from '../types/UserInterface'

const userSchema = new Schema<UserInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    // required: true,
  },
  verified: {
    type: Boolean,
    required: true,
  }
})

export const User = model<UserInterface>('User', userSchema)
