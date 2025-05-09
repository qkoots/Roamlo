//@ts-nocheck
// Libraries
import { Request, Response, NextFunction } from 'express'
// Error Handler
import { BadRequest, Conflict, NotFound } from '../utils/error'
// HTTP Codes
import { StatusCodes } from 'http-status-codes'

import { instance } from '../utils/axios'

import { Country } from '../models/Country'


// export const getAllProducts = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
//   // Validate request body

//   let path = ''
//   if (req.query.country) {
//     path = `?country=${req.query.country}`
//   } else if(req.query.region) {
//     path = `?region=${req.query.region}`
//   } 
  
//   try {
//     const { data: products } = await instance.get(`${process.env.MAYA_BASE_URL}/account/products${path}`)
    
//     res.status(StatusCodes.OK).json({
//       products,
//       status: 'success',
//     })

//   } catch (error) {
//     console.log(`Error in "getAllProducts": ${error} | ${error.response.data.developer_message}`)
//     return next(error)
//   }
// }

export const getSingleProduct = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

  try {
    const { data: product } = await instance.get(`${process.env.MAYA_BASE_URL}/product/${req.params.product_id}`)
    
    res.status(StatusCodes.OK).json({
      product,
      status: 'success',
    })

  } catch (error) {
    console.log(`Error in "getSingleProduct": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}

export const getProductsByCountry = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validate request body
  const { country } = req.params

  if (!country) {
    return next(new BadRequest('Country is required'))
  }

  try {
    const { data: product } = await instance.get(`${process.env.MAYA_BASE_URL}/account/products?country=${country}`)
    
    res.status(StatusCodes.OK).json({
      product,
      status: 'success',
    })

  } catch (error) {
    console.log(`Error in "getProductByCountry": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}

export const getProductsByRegion = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validate request body
  const { region } = req.params

  if (!region) {
    return next(new BadRequest('Region is required'))
  }

  try {
    const { data: product } = await instance.get(`${process.env.MAYA_BASE_URL}/account/products?region=${region}`)
    
    res.status(StatusCodes.OK).json({
      product,
      status: 'success',
    })

  } catch (error) {
    console.log(`Error in "getProductByRegion": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}

export const getRegions = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const regions = await Regions.find({})

    if (!regions) {
      throw new Error('Regions not found')
    }
    res.status(StatusCodes.OK).json({ regions })

  } catch (error) {
    console.log(`Error in "getRegions": ${error}`)
    return next(error)
  }
}

export const getCountries = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const countries = await Country.find({})

    if (!countries) {
      throw new Error('Countries not found')
    }
    res.status(StatusCodes.OK).json({ countries })

  } catch (error) {
    console.log(`Error in "getCountries": ${error}`)
    return next(error)
  }
}