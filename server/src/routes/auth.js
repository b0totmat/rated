import AuthController from '../controllers/AuthController.js'
import express from 'express'

const router = express.Router()

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)

export { router as authRouter }
