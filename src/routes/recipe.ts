import {Request, Response, Router} from "express";
import {Recipe} from "../models/Recipe";

const router = Router();

router.get('/', async(req: Request, res: Response) => {
    try {
        const recipesSnapshot = await db.collection('recettes').get();
        const recipes = recipesSnapshot.docs.map( doc => {
            const data = doc.data() as Recipe;
            return {
                id: doc.id,
                title: data.title,
                imageUrl: data.image,
                ingredients: data.ingredients.map( ingredient => ({
                    name: ingredient.name,
                    quantity: ingredient.quantity,
                    unit: ingredient.unit,
                })),
                favorite: data.favorite,
            }
        })
        res.status(200).json({ recipes });
    } catch (err) {
        res.status(500).json({ error: "Error getting recipes", details: err })
    }
});

export default router
