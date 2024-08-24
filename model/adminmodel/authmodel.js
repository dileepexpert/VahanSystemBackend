const mongoose=require("mongoose");

const signup=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const signUp=mongoose.model("signup",signup)
module.exports=signUp;