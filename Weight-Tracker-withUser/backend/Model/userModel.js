const mongoose=require("mongoose")
const validator=require("validator")
const bcrypt=require("bcrypt")


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



userSchema.statics.signup=async function(email,password){
if(!email || !password){
    throw Error("email and password are necessary")
}

if(!validator.isEmail(email)){
    throw Error("please enter a valid email")
}
if(!validator.isStrongPassword(password)){
    throw Error("please enter a strong password")
}
const exisitinguser=await this.findOne({email});
if(exisitinguser){
    throw Error("user with that email already exists")
}
    const hashpassword=await bcrypt.hash(password,10)
    const newuser=await this.create({email:email,password:hashpassword})
    return newuser
}



userSchema.statics.login=async function(email,password){
    if(!email || !password){
        throw Error("email and password are necessary")
    }
    if(!validator.isEmail(email)){
        throw Error("please enter a strong email")
    }
    const exisitinguser=await this.findOne({email});
    
    if(!exisitinguser){
        throw Error("user does not exist")
    }
    const passwordmatch=await bcrypt.compare(password,exisitinguser.password)
    if(passwordmatch){
        return exisitinguser;
    }
    else{
        throw Error("enter the correct password")
    }

}

module.exports=mongoose.model("weightUserModel",userSchema)