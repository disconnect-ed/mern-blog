import express from 'express'
const router = express.Router()
import {userRegistration, userLogin} from '../controllers/userController.js'

router.post('/registration', userRegistration)
router.post('/login', userLogin)

export default router