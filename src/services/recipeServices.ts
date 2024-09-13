import { db } from '../config/firebase'
import { Recipe } from '../models/Recipe'

export const getAllRecipes = async () => {
    try {
        const recipesSnapshot = await db.collection('recettes').get()
        return recipesSnapshot.docs.map(doc => {
            const data = doc.data() as Recipe
            return {
                id: doc.id,
                title: data.title,
                imageUrl: data.image || '../../public/images/default_food.jpeg',
                ingredients: data.ingredients.map(ingredient => ({
                    name: ingredient.name,
                    quantity: ingredient.quantity,
                    unit: ingredient.unit,
                })),
                favorite: data.favorite,
            }
        })
    } catch (err) {
        throw new Error(`Error fetching recipes: ${(err as Error).message}`)
    }
}
