const express=require("express")
const route=express.Router();
const { signupDetails, loginDetails } = require("../controllers/adminController/auth");
route.post("/signup",signupDetails)
route.post("/login",loginDetails)

const {create,fetch,update,deleted,searched}=require("../controllers/adminController/challanController")
const {paymentCreate,paymentFetch,paymentUpdate,paymentDeleted,paymentSearched}=require("../controllers/adminController/paymentController");
const {imgCreate,imgFetch,imgUpdate,imgDeleted,imgSearched}=require("../controllers/adminController/imageController");
const {authenticate}= require("../middleware/authentication");

//challan
route.post("/create",authenticate,create)
route.get("/fetch",fetch)
route.put("/update/:id",authenticate,update)
route.delete("/delete/:id",authenticate,deleted)
route.post("/search",searched)




 //payment

 route.post("/paymentcreate",authenticate,paymentCreate)
 route.get("/paymentfetch",paymentFetch)
 route.put("/paymentupdate/:id",authenticate,paymentUpdate)
 route.delete("/paymentdelete/:id",authenticate,paymentDeleted)
 route.post("/paymentsearch",paymentSearched)


 //images
 route.post("/imgcreate",authenticate,imgCreate)
 route.get("/imgfetch",imgFetch)
 route.put("/imgupdate/:id",authenticate,imgUpdate)
 route.delete("/imgdelete/:id",authenticate,imgDeleted)
 route.post("/imgsearch",imgSearched)
 

module.exports=route