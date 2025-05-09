import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // timeout: 1000,
  withCredentials: true,
  headers: { 
    'Content-Type': 'application/json',
   }
})

export { api }
