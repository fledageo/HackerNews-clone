const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const router = require("./routes/routes") 

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
app.use('/api', router)

const start = async() => {
    try{
        await mongoose.connect("mongodb+srv://fledage:fledage123@cluster0.pslfsrj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        app.listen(PORT,() => {
            console.log(`server is running on PORT ${PORT}`)
        })
    }catch(err){
        console.log("There is a Propblem",err)
    }
}

start()
