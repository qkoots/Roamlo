//@ts-nocheck
// Libraries
import { Request, Response, NextFunction } from 'express'
// Error Handler
import { BadRequest, Conflict, NotFound } from '../utils/error'
// HTTP Codes
import { StatusCodes } from 'http-status-codes'

import { instance } from '../utils/axios'


export const createEsim = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validate request body

  try {
    const { data: response } = await instance.post(`${process.env.MAYA_BASE_URL}/esim`, {
      ...req.body
    })
    
    res.status(StatusCodes.OK).json({
      esim: response.esim,
      status: 'success',
    })

  } catch (error) {
    console.log(`Error in "createEsim": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}

export const createGlobalEsim = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validate request body

  try {
    const { data: response } = await instance.post(`${process.env.MAYA_BASE_URL}/esim`, {
      ...req.body
    })

    res.status(StatusCodes.OK).json({
      esim: response,
      status: 'success',
    })

  } catch (error) {
    console.log(`Error in "createGlobalEsim": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}

export const getEsim = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validate request body

  try {
    const { data: response } = await instance.get(`${process.env.MAYA_BASE_URL}/esim/${req.params.iccid}`)

    res.status(StatusCodes.OK).json({
      esim: response.esim,
      status: 'success',
    })

  } catch (error) {
    console.log(`Error in "getEsim": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}

export const getEsimDataPlans = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validate request body
  
  try {
    const { data: response } = await instance.get(`${process.env.MAYA_BASE_URL}/esim/${req.params.iccid}/plans`)

    res.status(StatusCodes.OK).json({
      status: 'success',
      dataPlans: response.plans,
    })

  } catch (error) {
    console.log(`Error in "getEsimDataPlans": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}

export const getEsimRegions = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validate request body

  try {
    const { data: response } = await instance.get(`${process.env.MAYA_BASE_URL}/esim/${req.params.iccid}/regions`)

    res.status(StatusCodes.OK).json({
      status: 'success',
      regions: response.regions,
    })

  } catch (error) {
    console.log(`Error in "getEsimRegions": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}

export const deleteEsim = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  // Validate request body

  try {
    const { data: response } = await instance.delete(`${process.env.MAYA_BASE_URL}/esim/${req.params.iccid}`)

    res.status(StatusCodes.OK).json({
      esim: response.esim,
      status: 'success',
      message: `eSIM deleted ${req.params.iccid} successfully`
    })

  } catch (error) {
    console.log(`Error in "deleteEsim": ${error} | ${error.response.data.developer_message}`)
    return next(error)
  }
}