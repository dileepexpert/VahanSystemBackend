//auth



//create getOne Get update delete search


const express=require("express");
const route=express.Router();



const { adminSignup, adminLogin } = require("../../controller/admincontrol/auth/auth");
const { createAdmin, fetchAdmin, updateAdmin, deleted, searched } = require("../../controller/admincontrol/auth/admin");



//========Auth======= 
route.post("/signup",adminSignup)
route.post("/signin",adminLogin)

//========create,update,delete,search,fetch=======

route.post("/create",createAdmin)
route.get("/fetch",fetchAdmin)
route.put("/update/:id",updateAdmin)
route.delete("/delete/:id",deleted)
route.get("/search",searched)










module.exports=route;