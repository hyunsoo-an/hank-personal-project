import express from 'express'
import * as Path from 'node:path'
import pets from './routes/pets'

const server = express()

server.use(express.json())

// API Route
server.use('/api/v1/pets', pets)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
