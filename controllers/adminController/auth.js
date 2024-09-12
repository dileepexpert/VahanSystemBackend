const auth = require("../../models/authModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { registerValidation} = require("../../validation/authValidation");

// const signupDetails=async(req,res)=>{
//     try {
//         const data=req.body;
//         const {name,email,password}=data;
//         //validate  using  the code 
//         const {error}=registerSchema.validate({name,email,password})
//         console .log(error)
//         if(error){
//             return res.staus(401).send({Message:error.message})
//         }
//         const exitUser=await auth.findOne({email});
//         if( exitUser){
//             return res.status(403).send({Message:"email already exit:"});
//         }
//         const hashpassword=await bcrypt.hash(password,10);
//         const newpassword=await auth.create({name,email,password:hashpassword});
//         res.status(201).send({Message:"Admin Register is sucessfully:",newpassword})
        
//     } catch (error) {
//         res.status(500).send({Message:"Internal Server error..",error})
        
//     }
// }

const signupDetails = async (req, res) => {
    try {
        const data = req.body;
        const { name, email, password } = data;
        //console.log("hhh",data)

        // Validate using Joi schema
        const { error } = registerValidation.validate({ name, email, password });
        if (error) {
            console.log(error);
            return res.status(401).send({ Message: error.message });
        }

        // Check if user already exists
        const exitUser = await auth.findOne({ email });
        if (exitUser) {
            return res.status(403).send({ Message: "Email already exists." });
        }

        // Hash the password
        const hashpassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await auth.create({ name, email, password: hashpassword });
        res.status(201).send({ Message: "Admin registered successfully", newUser });

    } catch (error) {
        res.status(500).send({ Message: "Internal Server Error", error });
    }
};


const loginDetails=async(req,res)=>{
    try {
        const {id}=req.params;
        const data=req.body;
        const {email,password}=data;
        const exitUser=await  auth.findOne({email});
        if( !exitUser){
            res.status(404).send({Message:"User is not exit  :"});   
        }
        const matchpassword=await bcrypt.compare(password,exitUser.password);
        if(!matchpassword){
            return res.status(403).send({Message:"User password is not matched:"})
        }

         const token=await jwt.sign({email:exitUser.email},"expert",{expiresIn:"10h"})
        res.status(201).send({Message:"Admin logging sucessfully:",token});
    } catch (error) {
        res.status(500).send({Message:"Internal Server error..",error})
        
    }
}
module.exports={signupDetails,loginDetails}






