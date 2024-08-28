const express=require("express")
const route=express.Router();
const {createData,getData,getDataById,updateData,deleteData,searchData}=require("../controllers/adminController/challanController")
const {register,login}=require("../controllers/adminController/authController")
const {authCheck}=require("../middleware/authMiddleware")
// auth register
route.post("/register",register)
// auh login
route.post("/login",login)

//challan

route.post("/create",authCheck,createData)
route.get("/get",authCheck,getData)
route.get("/get/:id",authCheck,getDataById)
route.put("/update/:id",authCheck,updateData)
route.delete("/delete/:id",authCheck,deleteData)
route.get("/search",authCheck,searchData)

// //image
// route.post("/create-",authCheck,createData)
// route.get("/get",authCheck,getData)
// route.get("/get/:id",authCheck,getDataById)
// route.put("/update/:id",authCheck,updateData)
// route.delete("/delete/:id",authCheck,deleteData)
// route.get("/search",authCheck,searchData)

// //payment
// route.post("/create-",authCheck,createData)
// route.get("/get",authCheck,getData)
// route.get("/get/:id",authCheck,getDataById)
// route.put("/update/:id",authCheck,updateData)
// route.delete("/delete/:id",authCheck,deleteData)
// route.get("/search",authCheck,searchData)

module.exports=route
