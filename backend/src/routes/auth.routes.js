import express from "express"

const router = express.Router()

router.get("/signup", (req, res) => {
    res.send("Signup end Point")
})

router.get("/login", (req, res) => {
    res.send("Login end Point")
})

router.get("/logout", (req, res) => {
    res.send("Logout end Point")
})

export default router