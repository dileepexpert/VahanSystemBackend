const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");
const userRoute=require("./routes/userRoute")
const adminRoute=require("./routes/adminRoute")

const app=express();

dotenv.config()
//middleware
app.use(express.json())
app.use(cors());

const Port=process.env.Port||4000;

//mongoDb connection 
const ab=async()=>{
    try{

 mongoose.connect(process.env.MongoURI)
// res.status().send({message:"mongodb connection successful",connection})
console.log("Mongodb connection successful")
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

// mongoose
//   .connect("")
//   .then(() => {
//     console.log("MongoDb connected Successfully");
//   })
//   .catch((error) => {
//     console.log("Connection is Failed:", error);
//   });
    


//connect with route
app.use("/user",userRoute)
app.use("/admin",adminRoute)
//server connect

app.listen(Port,()=>{ 
       console.log("Server is connection on Port no:",Port)
})

