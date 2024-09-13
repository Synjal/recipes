import { Router } from 'express'
import { getAllRecipesHandler } from '../controllers/recipeControllers'
const router = Router()

router.get('/', getAllRecipesHandler)

export default router
