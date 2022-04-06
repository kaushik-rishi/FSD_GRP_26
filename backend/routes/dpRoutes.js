import express from 'express'
const router = express.Router()
import { addDProduct, getDProducts } from '../controlers/dpControler.js'
import upload from '../middleware/multerMiddleware.js'

router.get('/', getDProducts)
router.post('/', upload, addDProduct)

export default router