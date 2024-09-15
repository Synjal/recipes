import * as http from 'node:http'
import app from './app'

const server = http.createServer(app)

server.listen(process.env.PORT, () => {
    process.env.NODE_ENV === 'development' && console.info("--- DEV MODE ---")
    console.log(`Environment: ${process.env.NODE_ENV}`)
    console.log(`Database URL: ${process.env.FIREBASE_DATABASE_URL}`)
    console.log(`API endpoint: ${process.env.BASE_URL}`)
    console.log(`Swagger docs available at: ${process.env.BASE_URL}api-docs`)
})
