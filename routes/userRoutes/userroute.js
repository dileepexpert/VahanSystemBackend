const express=require("express")
const route=express.Router();



const { userLogin,userSignup } = require("../../controller/usercontroller/auth");
const { userSearch, userfetched } = require("../../controller/usercontroller/usercontrol");

// const { userLogin,userSignup } = require("../../controller/usercontroller/usercontrol");


//========Auth======= 
route.post("/signup",userSignup)
route.post("/signin",userLogin)

//========fetched One/many  , search=======
route.post("/fetch",userfetched)
route.post("/search",userSearch)









module.exports=route;