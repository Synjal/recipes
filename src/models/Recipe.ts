import { Ingredient } from './Ingredient'

export interface Recipe {
    title: string
    image: string
    ingredients: Ingredient[]
    favorite: boolean
}
