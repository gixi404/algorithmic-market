import express from 'express'
import path from 'path'
import { config } from 'dotenv'
config()
import PayRoute from './routes/pay.routes.js'
import cors from 'cors'
import express from 'express'
import path from 'path'
import { config } from 'dotenv'
import PayRoute from './routes/pay.routes.js'
import cors from 'cors'
config()

const PORT = 3001
export const app = express(),
  PORT = 3001

const app = express()

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(express.static(path.resolve('src/components')))
app.use(PayRoute)
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(express.static(path.resolve('src/components')))
app.use(PayRoute)

app.listen(PORT, console.log('running on port', PORT))
