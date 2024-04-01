
const weightsModel=require("../Model/weightsModel")

const getWeightsController=async(req,res)=>{
    try{
        const weights=await weightsModel.find({})
        res.status(200).json(weights)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}

const postWeightsController=async(req,res)=>{
    try{
        const weight=await weightsModel.create(req.body)
        res.status(200).json(weight)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}

const deleteWeightsController=async(req,res)=>{
    try{
        const deleted=await weightsModel.deleteOne({_id:req.params.id})
        res.status(200).json(deleted)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}


module.exports={getWeightsController,postWeightsController,deleteWeightsController}