const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const app=express()
const weightsRouter=require("./Router/WeightsRouter")

app.use(express.json())


app.use("/weights",weightsRouter)
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running",process.env.PORT)
    })
})