const express=require("express")
const weightsRouter=express.Router()

const {getWeightsController,postWeightsController,deleteWeightsController}=require("../Controller/weightsController")


weightsRouter.get("/",getWeightsController)

weightsRouter.post("/",postWeightsController)

weightsRouter.delete("/:id",deleteWeightsController)


module.exports=weightsRouter