const express=require("express")
const route=express.Router();


const{signupDetails,loginDetails} = require("../controllers/userController/auth");
const {challanFetch,challanSearched}=require("../controllers/userController/challanController");
const{paymentFetch,paymentSearched}=require ("../controllers/userController/paymentController")
const { imgFetch, imgSearched } = require("../controllers/adminController/imageController");

//auth
route.post("/signup",signupDetails);
route.post("/login",loginDetails);

//challan
route.get("/challanfetch",challanFetch)
route.post("/challansearch",challanSearched)


//payment
route.get("/paymentfetch",paymentFetch)
route.post("/paymentsearch",paymentSearched)

// img
route.get("/imgfetch",imgFetch)
route.post("/imgsearch",imgSearched)

module.exports=route