import { Router } from 'express'
import {
    addRecipeHandler,
    deleteRecipeHandler,
    getAllRecipesHandler,
    updateRecipeHandler,
} from '../controllers/recipeControllers'
const router = Router()

router.get('/', getAllRecipesHandler)
router.post('/', addRecipeHandler)
router.put('/:id', updateRecipeHandler)
router.delete('/:id', deleteRecipeHandler)

export default router
