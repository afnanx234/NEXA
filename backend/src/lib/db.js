import mongoose from "mongoose"
import { ENV } from "../lib/env.js"

export const connectDB = async => {
    try {
        const conn = mongoose.connect(ENV.MONGO_URI)
        console.log("MONGO CONNECTED")
    } catch (error) {
        console.log("MONGO NOT CONNECTED:", error)
        process.exit(1) //exit when 1 and 0 mean it is going good
    }
}