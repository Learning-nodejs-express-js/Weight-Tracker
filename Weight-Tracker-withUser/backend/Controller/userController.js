
const weightUserModel=require("../Model/userModel")
const jwt=require("jsonwebtoken")
require("dotenv").config()
const createToken=(_id)=>{
    const token=jwt.sign({_id},process.env.JWTKEY,{expiresIn:"3d"})
    return token;
}
const signUpController=async(req,res)=>{
    try{
        const {email,password}=req.body;

        const newuser=await weightUserModel.signup(email,password)
        if(newuser){
            const jsontoken=createToken(newuser._id)
            res.status(200).json({email,token:jsontoken})
        }
        else{
            res.status(400).json({message:"user could not be created"})
        }
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}


const loginUpController=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await weightUserModel.login(email,password)
        if(user){
            const jsontoken=createToken(user._id)
            res.status(200).json({email,token:jsontoken})
        }
        else{
            res.status(400).json({message:"user could not be logged in"})
        }
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

module.exports={signUpController,loginUpController}