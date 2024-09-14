import { db } from '../config/firebase'
import path from 'path'
import * as fs from 'node:fs'

export const uploadImageService = async (
    recipeId: string,
    imageUrl: string,
) => {
    try {
        const recipeRef = db.collection('recipes').doc(recipeId)
        const recipe = await recipeRef.get()
        const recipeData = recipe.data()

        if (recipeData && recipeData.image) {
            const oldImage = path.join(
                __dirname,
                '../../public/images',
                path.basename(recipeData.image),
            )
            fs.unlink(oldImage, err => {
                if (err) {
                    console.error(`Error deleting old image: ${err}`)
                }
            })
        }

        await recipeRef.update({ image: imageUrl })

        return { id: recipeId, imageUrl: imageUrl }
    } catch (err) {
        throw new Error(
            `Error updating recipe with image: ${(err as Error).message}`,
        )
    }
}
