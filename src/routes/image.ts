import { Router } from 'express'
import { uploadImageController } from '../controllers/imageControllers'
import upload from '../config/multerConfig'

const router = Router()

/**
 * @swagger
 * tags:
 *  - name: Image
 */

/**
 * @swagger
 * /image/{id}:
 *   post:
 *     tags:
 *       - Image
 *     summary: Upload an image for a recipe
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the recipe
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 imageUrl:
 *                   type: string
 *                   description: URL of the uploaded image
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/:id', upload.single('image'), uploadImageController)

export default router
