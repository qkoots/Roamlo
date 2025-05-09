//@ts-nocheck
// Libraries
import { Request, Response, NextFunction } from 'express'
// Error Handler
import { BadRequest, Conflict, NotFound } from '../utils/error'
// HTTP Codes
import { StatusCodes } from 'http-status-codes'

import { instance } from '../utils/axios'


export const topUpEsim = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validate request body

  try {
    const { data: response } = await instance.post(`${process.env.MAYA_BASE_URL}/esim/${req.params.iccid}/plan/${req.params.plan_type_id}`)
    
    res.status(StatusCodes.OK).json({
      response,
      status: 'success',
      message: 'eSIM Top-up successful',
    })

  } catch (error) {
    console.log(`Error in "topUpEsim": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}

export const getStatusEsim = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validate request body

  try {
    const { data: response } = await instance.get(`${process.env.MAYA_BASE_URL}/esim/${req.params.iccid}/plan/${req.params.plan_type_id}`)
    
    res.status(StatusCodes.OK).json({
      response,
      status: 'success',
      message: 'Data plan status retrieved successfully',
    })

  } catch (error) {
    console.log(`Error in "getStatusEsim": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}

export const deleteDataPlanFromEsim = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validate request body

  try {
    const { data: response } = await instance.get(`${process.env.MAYA_BASE_URL}/esim/:${req.params.iccid}/plan/${req.params.plan_type_id}`)

    console.log(response);

    res.status(StatusCodes.OK).json({
      response,
      status: 'success',
      message: 'Data plan deleted successfully',
    })

  } catch (error) {
    console.log(`Error in "deleteDataPlanFromEsim": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}
