// Libraries
import { model, Schema } from 'mongoose'

// Interfaces
import { CountryInterface } from '../types/CountryInterface'

const countrySchema = new Schema<CountryInterface>({
  country: {
    type: String,
    required: true
  },
  iso3: {
    type: String,
    required: true
  },
  iso2: {
    type: String,
    required: true
  },
  apnName: {
    type: String,
    required: true
  },
  autoApn: {
    type: String,
    required: true
  },
  wifi: {
    type: String,
    required: true
  }
})

export const Country = model<CountryInterface>('Country', countrySchema)
