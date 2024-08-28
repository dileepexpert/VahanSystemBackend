const express=require("express");
const mongoose=require("mongoose");
const userRoutes=require("../src/routes/userRoutes")
const adminRoutes=require("../src/routes/adminRoutes")



const app=express();
const Port=5000;


app.use(express.json());

mongoose.connect("mongodb+srv://kuleswariexpertsolutions:w5F2FkJHr8TKnOyU@cluster0.unm3o.mongodb.net/challanDetails")
.then(()=>{
 console.log("MongoDb is connection sucessfully:");
})
.catch((error)=>{
    console.log(" MongoDb  is Not Connection:",error);
})



app.use("/user",userRoutes);
app.use("/admin",adminRoutes)

app.listen(Port,()=>{
    console.log("Server is connection on port number:",Port);
})

// w5F2FkJHr8TKnOyU

// challanDetails