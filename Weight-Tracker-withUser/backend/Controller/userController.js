
const weightUserModel=require("../Model/userModel")
const signUpController=async(req,res)=>{
req.status(200).json({msg:"signup contorller"})

}
const loginUpController=async(req,res)=>{

    req.status(200).json({msg:"login contorller"})
}

module.exports={signUpController,loginUpController}