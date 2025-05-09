import mongoose, { Document } from 'mongoose'

export interface CountryInterface extends Document {
  _id: mongoose.Types.ObjectId
  country: string
  iso2: string,
  iso3: string,
  apnName: string,
  autoApn: string,
  wifi: string,
}
