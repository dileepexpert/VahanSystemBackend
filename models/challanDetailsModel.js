const mongoose=require("mongoose");

const CreateChallan=new mongoose.Schema({

TransporterName:{type:String},
MaterialName:{type:String},

ReceiverpartyName:{type:String},

Vehiclenumber:{type:Number}, 

GpsIMEINumber:{type:Number},

DriverName:{type:String}, 

Drivercontactnumber:{type:Number}, 

Loadingsite:{type:String}, 

Loadingdateandtime:{type:Number},

LoaderName:{type:String},

ChallanandRoyalityNumber:{type:Number}, 

DONumber:{type:String}, 

Freight:{type:String},

Qualityofmaterials :{type:String},

TPNumber:{type:Number}, 

Grossweight :{type:String},

TareWeight:{type:String}, 


Loadername:{type:String},

Loadermobilenumber:{type:Number}, 

Unloadingsite:{type:String}, 

Unloadingdateandtime:{type:Number},

ReceivedWeight:{type:String}, 

ShortageOfmaterials:{type:String}

},{timestamps:true})
module.exports=new mongoose.model("createChallanDetails",CreateChallan);
