import { Request, Response } from 'express'
import { getAllRecipes } from '../services/recipeServices'

export const getAllRecipesHandler = async (req: Request, res: Response) => {
    try {
        const recipes = await getAllRecipes()
        res.status(200).json({ recipes })
    } catch (err) {
        res.status((err as any).status || 500)
        res.json({
            message: (err as Error).message,
            error: req.app.get('env') === 'development' ? err : {},
        })
    }
}
