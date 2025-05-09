// Libraries
import express, { Express } from 'express';
import cors from 'cors'
import helmet from 'helmet'
import { json } from 'body-parser'
import path from 'path'
import * as dotenv from 'dotenv'
const cookieParser = require('cookie-parser')
dotenv.config()

//Error handler
import { handleErrors } from './src/middleware/errorHandler'
// Database
import { connectDB } from './src/database/db'
// Router
import router  from './src/routes/router'

const app: Express = express()

// Middlewares
app.use(
  cors({
    credentials: true,
    // frontend URL's
    origin: [
      'http://localhost:8000/',
    ]
  })
)

app.use(helmet.contentSecurityPolicy({
  directives: {
    "scriptSrc": ["'self'", "https://firebasestorage.googleapis.com/", "https://maps.googleapis.com/"],
    "connectSrc": ["'self'", "https://firebasestorage.googleapis.com/", "https://maps.googleapis.com/"],
    "imgSrc": ["'self'", 
      `https:`,
      `data:`
    ]
  }
}))

app.use(json())
app.use(express.urlencoded({ extended: true }))

// api prefix
app.use('/api', router)
app.use(cookieParser())
app.use(handleErrors)


if (!parseInt(process.env.PORT as string)) {
  process.exit(1)
}

/* ENABLE THIS FOR DEPLOYMENT */
app.use(express.static(path.join(__dirname, './client/dist')))

app.get('/{*path}', (_req: any, res: any) => {
  res.sendFile(path.join(__dirname, './client/dist', 'index.html'))
})


// call and connect to Database
connectDB()

// Starting the Server
app.listen(process.env.PORT || 5000, () => {
  console.log('-----------------------------')
  // console.log(`server start running at port ${process.env.PORT}`)
  console.log(`Server is Live here -> http://localhost:${process.env.PORT}`)
})
