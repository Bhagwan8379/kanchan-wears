const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()


const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: process.env.NODE_ENV === 'development'
        ? process.env.LOCAL_URL
        : process.env.LIVE_URL,
    credentials: true
}))

app.use("/api/v1/auth", require("./routes/auth.routes"))

app.use((req, res) => {
    res.status(404).json({ mesage: "Route Not Found 404" })
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: `SERVER ERROR ${err.message}` })
})


mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED 🥭")
    app.listen(process.env.PORT || 5000, console.log("server Running🏃‍♀️"))
})