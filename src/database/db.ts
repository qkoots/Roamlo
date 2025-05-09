import { connect } from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await connect(process.env.MONGO_URI as string)

    console.log('-----------------------------')
    // console.log('MongoDB')
    // console.log(`Host: ${conn.connection.host}`)
    // console.log(`Name: ${conn.connection.name}`)
    // console.log(`Port: ${conn.connection.port}`)
    // console.log('-----------------------------')
    console.log('Database connected Successfully!')

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
