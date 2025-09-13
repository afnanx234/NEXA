import express from "express"
import { signup } from "../controller/auth.controllers.js"

const router = express.Router()

router.post("/signup", signup)

router.get("/login", (req, res) => {
    res.send("Login end Point")
})

router.get("/logout", (req, res) => {
    res.send("Logout end Point")
})

export default router