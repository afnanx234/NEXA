import mongoose from "mongoose"

export const connectDB = async => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI)
        console.log("MONGO CONNECTED")
    } catch (error) {
        console.log("MONGO NOT CONNECTED:", error)
        process.exit(1) //exit when 1 and 0 mean it is going good
    }
}