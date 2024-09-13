import express, { Request, Response, NextFunction } from 'express'
import path from 'path'
import logger from 'morgan'
import createError from 'http-errors'

import recipeRouter from './routes/recipe'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/recipe', recipeRouter)

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
