const mongoose=require("mongoose")

const weightsSchema=mongoose.Schema({
weight:{
    type:"Number",
    required:true,
},
date:{
    type:"String",
    required:true,
}
}
)

module.exports=mongoose.model("weightsModel",weightsSchema)