const jwt=require("jsonwebtoken")
const weightUserModel=require("../Model/userModel")
require("dotenv").config()
const weightsRouteProtector=async(req,res,next)=>{
    
    try{
        const {authorization}=req.headers;
        if(!authorization){
            res.status(400).json({message:"please share a valid authorization token"})
            return;
        }
        const token=authorization.split(" ")[1];
        if(!token){
            res.status(400).json({message:"please share a valid authorization token"})
            return;
        }
        const {_id}=jwt.verify(token,process.env.JWTKEY)
        
        req.user=await weightUserModel.findOne({_id})
        if(!req.user){
            res.status(400).json({message:"please share a valid authorization token"})
            return;
        }
        next()
    }
    catch(error){
        res.status(400).json({message:"please share a valid authorization token"})
    }

   
}
module.exports={weightsRouteProtector}