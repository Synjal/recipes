// @ts-ignore
import swaggerJsDocs from 'swagger-jsdoc'

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Recipe API',
            version: '1.0.0',
            description: 'API for managing recipes',
        },
        components: {
            schemas: {
                Recipe: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string',
                            description: 'The title of the recipe',
                        },
                        image: {
                            type: 'string',
                            description: 'The image URL of the recipe',
                        },
                        ingredients: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/Ingredient',
                            },
                            description: 'A list of ingredients for the recipe',
                        },
                        favorite: {
                            type: 'boolean',
                            description:
                                'Whether the recipe is marked as favorite',
                        },
                    },
                },
                Ingredient: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'The name of the ingredient',
                        },
                        quantity: {
                            type: 'number',
                            description: 'The quantity of the ingredient',
                        },
                        unit: {
                            type: 'string',
                            enum: ['g', 'cl', 'p'],
                            description: 'The unit for the quantity',
                        },
                    },
                },
            },
        },
        servers: [
            {
                url: 'https://recipe-api.example.com',
                description: 'Production server',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
}

export const swaggerDocs = swaggerJsDocs(swaggerOptions)
