import express from 'express'
import path from "path"
import { config } from 'dotenv'
config()
import PayRoute from './routes/pay.routes.js'
import cors from 'cors'

const PORT = process.env.PORT_BACK;

const app = express()

app.use(cors({origin:"http://localhost:3000"}))
app.use(express.json())
app.use(express.static(path.resolve("src/components")))
app.use(PayRoute)


app.listen(PORT,console.log('running on port', PORT))