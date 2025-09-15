import express from "express"
import path from "path"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import { connectDB } from "./lib/db.js"
import { ENV } from "./lib/env.js"

const app = express()
const __dirname = path.resolve()

app.use(express.json()) //the data user and we catch
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

//make  ready for deployment

if(ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

app.listen(ENV.PORT, () => {
    console.log("Server start running at:", ENV.PORT)
    connectDB()
})