import { Ingredient } from './Ingredient'

export interface Recipe {
    title: string
    description?: string
    image?: string
    ingredients: Ingredient[]
    favorite?: boolean
}
