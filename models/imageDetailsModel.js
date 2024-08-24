const mongoose=require("mongoose");

const imageSchema=new mongoose.Schema({

    gpsImeiPic:
    {
        type:{}
    },

    vehicleNumberPlate:
    {
        type:{}
    },
    
    DriverPic:
    {
        type:{}
    },
    
    sealingImages:
    {
        type:{}
    },
    
    vehicleImages:
    {
        type:{}
    },
},{timestamps:true})


const imageDetail=mongoose.model("imageDetails",imageSchema);
module.exports= imageDetail;