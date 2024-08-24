const express=require("express");
const mongoose=require("mongoose");
const app=express();
const useRoute=require("./routes/userRoutes/userroute");
const port=5000;
//middleware
app.use(express.json())




//mongodb connecction
mongoose.connect("mongodb+srv://birenexpertsolutions:bTvmhkmwsBoFeR4k@cluster0.mxkwv.mongodb.net/challanproject")
.then(()=>{
    console.log("MongoDb connection Successfully")
})

.catch((error)=>{
console.log("MongoDb Connection Failed",error);

})


//server
app.listen(port,()=>{
 console.log("Server Fetching the port",port);
 
})

//router
app.use("/",useRoute)

