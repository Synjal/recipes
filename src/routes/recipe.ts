import { Router } from 'express'
import {
    addRecipeHandler,
    deleteRecipeHandler,
    getAllRecipesHandler,
    updateRecipeHandler,
} from '../controllers/recipeControllers'
const router = Router()

/**
 * @swagger
 * tags:
 *  - name: Recipe
 */

/**
 * @swagger
 * /recipe:
 *   get:
 *     tags:
 *       - Recipe
 *     summary: Get all recipes
 *     description: Retrieve a list of all recipes
 *     responses:
 *       200:
 *         description: A list of recipes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recipe'
 */
router.get('/', getAllRecipesHandler)

/**
 * @swagger
 * /recipe:
 *   post:
 *     tags:
 *       - Recipe
 *     summary: Add a new recipe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recipe'
 *     responses:
 *       201:
 *         description: Recipe successfully created.
 */
router.post('/', addRecipeHandler)

/**
 * @swagger
 * /recipe/{id}:
 *   put:
 *     tags:
 *       - Recipe
 *     summary: Update an existing recipe
 *     description: Update the details of an existing recipe by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the recipe to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recipe'
 *     responses:
 *       200:
 *         description: Recipe successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 */
router.put('/:id', updateRecipeHandler)

/**
 * @swagger
 * /recipe/{id}:
 *   delete:
 *     tags:
 *       - Recipe
 *     summary: Delete a recipe
 *     description: Remove a recipe from the list by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the recipe to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recipe successfully deleted
 */
router.delete('/:id', deleteRecipeHandler)

export default router
