const express=require("express")
const route=express.Router();
const {createData,getData,getDataById,updateData,deleteData,searchData}=require("../controllers/adminController/adminController")
const {register,login}=require("../controllers/adminController/authController")

// auth register
route.post("/register",register)
// auh login
route.post("/login",login)

route.post("/create",createData)
route.get("/get",getData)
route.get("/get/:id",getDataById)
route.put("/update/:id",updateData)
route.delete("/delete/:id",deleteData)
route.get("/search",searchData)


module.exports=route
