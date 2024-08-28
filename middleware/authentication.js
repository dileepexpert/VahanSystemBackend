

const jwt=require("jsonwebtoken");
//const  security="expert"


const authenticate=async(req,res,next)=>{
const token=req.headers["key-token"];
console.log("token:",token);
try {
    const verifyToken=await jwt.verify(token,"expert");
    if(!token){
        return res.status(401).send({Message:"Token is not found"})
        }

    if(!verifyToken){
    return res.status(401).send({Message:"Token is not Matched"})
    }
    

    req.email=verifyToken.email;
    next();
    

} catch (error) {
    console.log("error:",error)
    res.status(401).send({Message:"invalid  token"})
}
};


module.exports={authenticate};

