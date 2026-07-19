import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import { connectDB } from './config/db.js'
import cors from 'cors'


dotenv.config()
const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/api/v1/user', userRouter)


app.listen(PORT, () => {
    connectDB()
    console.log(`Server listening on http://localhost:${PORT}`)
})