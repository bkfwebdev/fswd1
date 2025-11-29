import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { postsRoutes } from './db/routes/posts.js'
import { userRoutes } from './db/routes/users.js'
import { eventRoutes } from './db/routes/events.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())

postsRoutes(app)
userRoutes(app)
eventRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

export { app }