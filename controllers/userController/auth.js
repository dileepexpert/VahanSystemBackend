const auth = require("../../models/authModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const signupDetails=async(req,res)=>{
    try {
        const data=req.body;
        const {name,email,password}=data;
        const exitUser=await auth.findOne({email});
        if( exitUser){
            return res.status(403).send({Message:"User already exit:"});
        }
        const hashpassword=await bcrypt.hash(password,10);
        const newpassword=await auth.create({name,email,password:hashpassword});
        res.status(201).send({Message:"Signup data is sucessfully:",newpassword})
        
    } catch (error) {
        res.status(500).send({Message:"Internal Server error..",error})
        
    }
}
const loginDetails=async(req,res)=>{
    try {
        const data=req.body;
        const {email,password}=data;
        const exitUser=await  auth.findOne({email});
        console.log(exitUser)
        if( !exitUser){
            res.status(404).send({Message:"User is not exit  :"});   
        }
        const matchpassword=await bcrypt.compare(password,exitUser.password);
        console.log(matchpassword)
        if(!matchpassword){
            return res.send({Message:"User password is not matched:"})
        }

         const token=jwt.sign({email:exitUser.email},"expert",{expiresIn:"4h"})
         res.status(200).send({Message:"login   data is Sucessfully :",token});
    } catch (error) {
        res.status(500).send({Message:"Internal Server error..",error})
        
    }
}
module.exports={signupDetails,loginDetails}