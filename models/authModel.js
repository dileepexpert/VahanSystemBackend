const mongoose=require("mongoose");

const authSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            // trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            trim:true
        }
    },{timestamps:true}
)
module.exports=mongoose.model("user",authSchema);

//dileep kumar

console.log("Dileep")