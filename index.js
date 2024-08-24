const express=require("express");
const mongoose=require("mongoose");
const userRoute=require("./routes/userRoute")
const adminRoute=require("./routes/adminRoute")
const app=express();

//middleware
app.use(express.json())

const Port=5000;

//mongoDb connection 
const ab=async()=>{
    try{

 mongoose.connect("mongodb+srv://rameshbexpertsolutions:XyJHv1oyCQ1luLOm@cluster0.xltg9.mongodb.net/vahanTrackSystem")
// res.status().send({message:"mongodb connection successful",connection})
console.log("connection successful hhh")
    }catch(error){
        console.log("error:",error)
        // res.status().send({message:"mongodb connection no successful"})
    }
}
ab()






// .then(()=>{
//     console.log("MongoDb connection Successfully")
// })

// .catch((error)=>{
//     console.log("Connection failed:",error)
// })

    


//connect with route
app.use("/user",userRoute)
app.use("/admin",adminRoute)
//server connect

app.listen(Port,()=>{ 
       console.log("Server is connection on Port no:",Port)
})

