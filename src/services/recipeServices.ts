import { db } from '../config/firebase'
import { Recipe } from '../models/Recipe'

export const getAllRecipes = async () => {
    try {
        const recipesSnapshot = await db.collection('recipes').get()
        return recipesSnapshot.docs.map(doc => {
            const data = doc.data() as Recipe
            return {
                id: doc.id,
                title: data.title,
                description: data.description || '',
                image:
                    data.image ||
                    process.env.BASE_URL + 'images/default_food.jpeg',
                ingredients: data.ingredients.map(ingredient => ({
                    name: ingredient.name,
                    quantity: ingredient.quantity,
                    unit: ingredient.unit,
                })),
                favorite: data.favorite || false,
            }
        })
    } catch (err) {
        throw new Error(`Error fetching recipes: ${(err as Error).message}`)
    }
}

export const addRecipe = async (data: Recipe) => {
    const docRef = await db.collection('recipes').add(data)
    return {
        id: docRef.id,
        ...data,
    }
}

export const updateRecipe = async (id: string, data: Partial<Recipe>) => {
    await db.collection('recipes').doc(id).update(data)
    return { id, ...data }
}

export const deleteRecipe = async (id: string) => {
    await db.collection('recipes').doc(id).delete()
}
