const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const cors=require("cors")
const app=express()
const weightsRouter=require("./Router/WeightsRouter")
const userRouter=require("./Router/UserRouter")
const {weightsRouteProtector}=require("./Middleware/weightRouteProtector")
app.use(cors())
app.use(express.json())

app.use("/users",userRouter)
app.use("/weights",weightsRouteProtector)
app.use("/weights",weightsRouter)
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running",process.env.PORT)
    })
})
