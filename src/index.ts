import * as http from 'node:http'
import app from './app'

const server = http.createServer(app)

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log(`Environment: ${process.env.NODE_ENV}`)
    console.log(`Database URL: ${process.env.FIREBASE_DATABASE_URL}`)
    console.log(`API endpoint: http://localhost:${process.env.PORT}/`)
})
