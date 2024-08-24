const express=require("express")
const route=express.Router();
const {getData,getDataById,searchData}=require("../controllers/adminController/adminController")
const {register,login}=require("../controllers/userController/authController")

//get all data
route.get("/get",getData)
//get by id
route.get("/get/:id",getDataById)
//search by fields key values
route.get("/search",searchData)

// user register
route.post("/register",register)
// user login
route.post("/login",login)
module.exports=route


