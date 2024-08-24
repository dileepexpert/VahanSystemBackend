const mongoose=require("mongoose");
const imageDetails=new mongoose.Schema({
    GPSIMEIPic:{
        type:String,
        require:true
    },
    VEHICLENUMBERPLATE:{
        type:String,
        require:true
    },
    DRIVERPIC:{
        type:String,
        require:true
    },
    SEALINGIMAGES:{
        type:String,
        require:true
    },
    VEHICLEIMAGES:{
        type:String,
        require:true
    },
})


const image=mongoose.model("imagedails",imageDetails);
module.exports=image;