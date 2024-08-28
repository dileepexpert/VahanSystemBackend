const mongoose=require("mongoose");


const images=new mongoose.Schema({

GPSIMEIPIC:{
    type:String

},

VEHICLENUMBERPLATE:{
    type:Number

},
DRIVERPIC:{
    type:String

},
SEALINGIMAGES:{
type:String
},

VEHICLEIMAGES:{
type:String
}
},{timestamps:true})


const User=new mongoose.model("imagesDetails",images);
module.exports=User;