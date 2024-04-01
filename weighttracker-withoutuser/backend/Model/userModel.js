const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})
userSchema.statics.signup=function async(req,res){

}
userSchema.statics.login=function async(req,res){
    
}

module.exports=mongoose.model("weightUserModel",userSchema)