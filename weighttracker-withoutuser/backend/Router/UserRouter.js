const express=require("express")

const userRouter=express.Router()
const {signUpController,loginUpController}=require("../Controller/userController")


userRouter.post("/signup",signUpController)

userRouter.post("/login",loginUpController)


module.exports=userRouter

