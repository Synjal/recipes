import { Request, Response } from 'express'
import { getImageUrl } from '../config/multerConfig'
import { uploadImageService } from '../services/imageServices'

export const uploadImageController = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' })
        }

        const recipeId = req.params.id
        const imageUrl = getImageUrl(req.file.filename)

        const image = await uploadImageService(recipeId, imageUrl)

        res.status(200).json({ image })
    } catch (err) {
        res.status(500).json({
            error: 'Error uploading image',
            details: (err as Error).message,
        })
    }
}
