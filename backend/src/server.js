import express from "express"
import dotenv from "dotenv"
import path from "path"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"

dotenv.config()

const app = express()
const __dirname = path.resolve()

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

//make  ready for deployment

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

app.listen(process.env.PORT, () => console.log(`Server is running at ${process.env.PORT}`))