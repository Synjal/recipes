import { Router } from 'express'
import { uploadImageController } from '../controllers/imageControllers'
import upload from '../config/multerConfig'

const router = Router()

router.post('/:id', upload.single('image'), uploadImageController)

export default router
