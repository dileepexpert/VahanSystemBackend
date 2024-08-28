const mongoose=require("mongoose");

const imageSchema=new mongoose.Schema({

    gpsImeiPic:
    {
        type:String
    },

    vehicleNumberPlate:
    {
        type:String
    },
    
    DriverPic:
    {
        type:String
    },
    
    sealingImages:
    {
        type:String
    },
    
    vehicleImages:
    {
        type:String
    },
},{timestamps:true})


const imageDetail=mongoose.model("imageDetail",imageSchema);
module.exports= imageDetail;