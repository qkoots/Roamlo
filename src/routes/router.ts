// Libraries
import express, { Router } from 'express';
const router: Router = express.Router();

// Middlewares
import { verifyRefreshToken, refreshToken, authenticateToken } from '../middleware/tokenHandler';

// Controllers
import { logIn, logout, signUp, verifyOTP, resendOTP, updateAccount, resetPasswordLink, resetPassword } from '../controllers/authController'
import { deleteDataPlanFromEsim, topUpEsim, getStatusEsim } from '../controllers/DataPlanController'
import { getSingleProduct, getCountries, getRegions, getProductsByCountry, getProductsByRegion } from '../controllers/ProductController'
import { getCustomer, createCustomer, updateCustomer } from '../controllers/CustomerController'
import { createEsim, createGlobalEsim, getEsim, deleteEsim, getEsimDataPlans, getEsimRegions } from '../controllers/EsimController'

// Public Routes
router.post('/signup', signUp)
router.post('/verify-otp', verifyOTP)
router.post('/resend-verification', resendOTP)
router.post('/login', logIn)
router.post('/logout', logout)
router.post('/forgot-password', resetPasswordLink)
router.post('/reset-password', resetPassword)

// Protected Routes
router.post('/update-profile', authenticateToken, verifyRefreshToken, refreshToken, updateAccount)
// router.post('/verify-token', verifyRefreshToken, refreshToken)
// router.post('/token', verifyRefreshToken, refreshToken)

router.get('/countries', getCountries)
router.get('/regions', getRegions)
router.get('/products-country', getProductsByCountry)
router.get('/products-region', getProductsByRegion)
router.get('/product/:product_id', getSingleProduct)

router.post('/esim/:iccid/plan/:plan_type_id', topUpEsim)
router.get('/esim/:iccid/plan/:plan_type_id', getStatusEsim)
router.delete('/esim/:iccid/plan/:plan_type_id', deleteDataPlanFromEsim)

router.get('/customer/:id', getCustomer)
router.post('/customer', createCustomer)
router.patch('/customer/:id', updateCustomer)

router.post('/create-esim', createEsim)
router.post('/esim/global', createGlobalEsim)
router.get('/esim/:iccid', getEsim)
router.delete('/esim/:iccid', deleteEsim)
router.get('/esim/:iccid/plans', getEsimDataPlans)
router.get('/esim/:iccid/regions', getEsimRegions)

export default router