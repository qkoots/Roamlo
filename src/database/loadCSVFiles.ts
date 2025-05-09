import { Country } from '../models/Country';
import { CountryInterface } from '../types/CountryInterface'
import { createReadStream } from "fs";
import { parse } from "csv-parse";
import { connectDB } from '../database/db'

connectDB()

// import { connect } from 'mongoose'
// import * as dotenv from 'dotenv'
// dotenv.config()

// const connectDB = async (): Promise<void> => {
//   try {
//     const conn = await connect(process.env.MONGO_URI as string)

//     console.log('-----------------------------')
//     // console.log('MongoDB')
//     // console.log(`Host: ${conn.connection.host}`)
//     // console.log(`Name: ${conn.connection.name}`)
//     // console.log(`Port: ${conn.connection.port}`)
//     // console.log('-----------------------------')
//     console.log('Database connected Successfully!')

//   } catch (error) {
//     console.log(error)
//     process.exit(1)
//   }
// }


createReadStream("files/regions.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    loadCSVFiles(row);
  })
  .on("end", function () {
    console.log("finished")
  })
  .on("error", function (error) {
    console.log(error.message)
  })

 const loadCSVFiles = async (row: any) => {
  try {
    await Country.create({
      country: row[0],
      iso3: row[1],
      iso2: row[2],
      apnName: row[3],
      autoApn: row[4],
      wifi: row[5]
    })
  } catch (error) {
    console.error("Error loading CSV files:", error)
  }
}