import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"

dotenv.config()

const app = express()

// const PORT = process.env.PORT
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(process.env.PORT, () => console.log(`Server is running at ${process.env.PORT}`))