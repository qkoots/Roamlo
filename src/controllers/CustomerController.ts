//@ts-nocheck
// Libraries
import { Request, Response, NextFunction } from 'express'
// Error Handler
import { BadRequest, Conflict, NotFound } from '../utils/error'
// HTTP Codes
import { StatusCodes } from 'http-status-codes'

import { instance } from '../utils/axios'


export const getCustomer = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { data: result } = await instance.get(`${process.env.MAYA_BASE_URL}/customer/${req.params.id}`)
    
    res.status(StatusCodes.OK).json({
      customer: result.customer,
      status: 'success',
    })

  } catch (error) {
    console.log(`Error in "getCustomer": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}

export const createCustomer = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { data: result } = await instance.post(`${process.env.MAYA_BASE_URL}/customer`, {
      ...req.body
    })

    res.status(StatusCodes.CREATED).json({
      customer: result.customer,
      status: 'success',
    })

  } catch (error) {
    console.log(`Error in "createCustomer": ${error} | ${error.response.data.developer_message}`)  
    return next(error)
  }
}

export const updateCustomer = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const result = await instance.patch(`${process.env.MAYA_BASE_URL}/customer/${req.params.id}`, {
      ...req.body
    })

    res.status(StatusCodes.OK).json({
      customer: result.customer,
      status: 'success',
    })

  } catch (error) {
    console.log(`Error in "updateCustomer": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}
