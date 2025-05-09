const axios = require('axios')

export const instance = axios.create({
  baseURL: process.env.API_URL,
  // timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Basic ${process.env.MAYA_AUTHORIZATION_URL}`,
  }
})


