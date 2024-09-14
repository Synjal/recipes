import { Request, Response } from 'express'
import {
    addRecipe,
    deleteRecipe,
    getAllRecipes,
    updateRecipe,
} from '../services/recipeServices'

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

export const addRecipeHandler = async (req: Request, res: Response) => {
    try {
        const newRecipe = await req.body
        const result = await addRecipe(newRecipe)
        res.status(201).json(result)
    } catch (err) {
        res.status(500).json({
            error: 'Error adding recipe',
            details: (err as Error).message,
        })
    }
}

export const updateRecipeHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const updatedRecipe = await req.body
        const result = await updateRecipe(id, updatedRecipe)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({
            error: 'Error updating recipe',
            details: (err as Error).message,
        })
    }
}

export const deleteRecipeHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        await deleteRecipe(id)
        res.status(204).send()
    } catch (err) {
        res.status(500).json({
            error: 'Error deleting recipe',
            details: (err as Error).message,
        })
    }
}
