const user=require("../../../model/adminmodel/authmodel");
const bcrypt=require("bcrypt")
const awt=require("jsonwebtoken")
//sign up API
const adminSignup=async(req,res)=>{
    try {
        const data=req.body;
        const {name,email,password}=data;
        const exituser=await user.findOne({email})
        if(exituser)
        {
            return res.status(403).send({message:"Email already Exist"})
        }

        const hashpassword=await bcrypt.hash(password,10);
        const saveData=await user.create({name,email,password:hashpassword});
        res.status(201).send({message:"SignUp Successfully",saveData})



    } catch (error) {
        console.log("Error :",error);
        res.status(500).send({message:"Internal Server",error})
        
        
    }
}

//Login Api
const adminLogin=async(req,res)=>{
    try {
        const data=req.body;
        const {email,password}=data;
        const exituser=await user.findOne({email})
        if(!exituser){
            return res.status(403).send({message:"Email not found"}) 
        }
        const conpass=await bcrypt.compare(password,exituser.password)
        if(!conpass){
            return res.status(403).send({message:"Password not found"}) 
        }
        
        const token=awt.sign({email:exituser.email},"biren",{expiresIn:"5h"})
        res.status(201).send({message:"SignIn UnSuccessfully",token})

    } catch (error) {
        console.log("Error",error);
        res.status(500).send({message:"SignIn UnSuccessfully",error})

    }
}









module.exports={adminSignup,adminLogin}