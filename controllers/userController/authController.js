
const User=require("../../models/authModel")

const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { registerValidation } = require("../../validation/authValidation")
const SECRET_KEY="expert"

const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body

        // validation checking
        const {error}=registerValidation.validate({name,email,password})
        if (error) {
            return res.status(400).send({ message: error.message });
        }

        const existedUser=await User.findOne({email})
        if(existedUser){
            return res.status(400).send({message:"Email Already Exist"}) 
        }
        
        const bcryptedPassword=await bcrypt.hash(password,10)
        const registerUser=await User.create({name,email,password:bcryptedPassword})
        res.status(201).send({message:"user registered successfully",registerUser})
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
}




const login=async(req,res)=>{   
    try {
        const {email,password}=req.body
        const existedUser=await User.findOne({email})
        if(!existedUser){
            return res.status(400).send({message:"Email not Exist"}) 
        }
        const existPassword=await bcrypt.compare(password,existedUser.password)

        if(!existPassword){
            return res.status(400).send({message:"Password not exist"}) 
        }
       
        const token=jwt.sign({email:existedUser.email},SECRET_KEY,{expiresIn:"2h"})
        res.status(200).send({message:"user logged successfully",token});
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
}


module.exports={register,login}