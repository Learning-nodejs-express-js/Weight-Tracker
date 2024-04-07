
const weightsModel=require("../Model/weightsModel")

const getWeightsController=async(req,res)=>{
    try{
        const weights=await weightsModel.find({userid:req.user._id})
        res.status(200).json(weights)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

const postWeightsController=async(req,res)=>{
    try{
      
        const weight=await weightsModel.create({...req.body,userid:req.user._id})
      
        res.status(200).json(weight)
    }
    catch(error){
        
        res.status(400).json({message:error.message})
    }
}

const deleteWeightsController=async(req,res)=>{
    try{
        const deleted=await weightsModel.deleteOne({_id:req.params.id,userid:req.user._id})
        res.status(200).json(deleted)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}


module.exports={getWeightsController,postWeightsController,deleteWeightsController}