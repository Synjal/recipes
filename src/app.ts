import express, { Request, Response, NextFunction } from 'express'
import path from 'path'
import logger from 'morgan'
import createError from 'http-errors'
// @ts-ignore
import swaggerUi from 'swagger-ui-express'

import './config/firebase'

import recipeRouter from './routes/recipe'
import imageRouter from './routes/image'
import { swaggerDocs } from './config/swaggerConfig'

const app = express()

// ---------- Middlewares ----------
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ---------- Images ----------
app.use(
    '/favicon.ico',
    express.static(path.join(__dirname, '../public/images/favicon.png')),
)
app.use('/images', express.static(path.join(__dirname, '../public/images')))

// ---------- Routes ----------
app.use('/recipe', recipeRouter)
app.use('/image', imageRouter)

// ---------- Swagger ----------
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// ---------- Errors ----------
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404))
})

app.use((err: any, req: Request, res: Response) => {
    res.status(err.status || 500)
    res.json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {},
    })
})

export default app
