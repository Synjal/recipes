import * as http from 'node:http'
import app from './app'

const server = http.createServer(app)

server.listen(process.env.PORT, () => {
    console.log(`----- Server is running -----`)
})
