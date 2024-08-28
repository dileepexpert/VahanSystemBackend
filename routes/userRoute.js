const express=require("express")
const route=express.Router();
const {getData,getDataById,searchData}=require("../controllers/userController/challanController")
const {register,login}=require("../controllers/userController/authController")
const {authCheck}=require("../middleware/authMiddleware")

// user register
route.post("/register",register)
// user login
route.post("/login",login)

//get all data
route.get("/get",authCheck,getData)
//get by id
route.get("/get/:id",authCheck,getDataById)
//search by fields key values
route.get("/search",authCheck,searchData)


// image

// //get all data
// route.get("/get",authCheck,getData)
// //get by id
// route.get("/get/:id",authCheck,getDataById)
// //search by fields key values
// route.get("/search",authCheck,searchData)


//payment

// //get all data
// route.get("/get",authCheck,getData)
// //get by id
// route.get("/get/:id",authCheck,getDataById)
// //search by fields key values
// route.get("/search",authCheck,searchData)


module.exports=route


