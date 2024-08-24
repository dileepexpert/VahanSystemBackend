const mongoose=require("mongoose");

const vahanSchema=new mongoose.Schema({

    transporterName:
    {
        type:String,
        required:true
    },
    
    materialName:{
        type:String,
        required:true
    },
    
    receiverPartyName:{
        type:String,
        required:true
    },
    
    vehicleNumber :{
        type:String,
        required:true
    },
    
    gpsImeiNumber:{
        type:String,
        required:true
    },
    
    driverName:{
        type:String,
        required:true
    }, 
    
    driverContactNumber:{
        type:String,
        required:true
    }, 
    
    loadingSite :{
        type:String,
        required:true
    },
    
    loadingDateTime:{
        type:Date,
        required:true
    },
    
    loaderName:{
        type:String,
        required:true
    },
    
    challanRoyaltyNumber:{
        type:String,
        required:true
    },
    
    doNumber :{
        type:String,
        required:true
    },
    
    freight :{
        type:String,
        required:true
    },
    
    qualityOfMaterials:{
        type:String,
        required:true
    },
    
    tpNumber :{
        type:String,
        required:true
    },
    
    grossWeight:{
        type:String,
        required:true
    },
    
    tareWeight:{
        type:String,
        required:true
    },
    
    netMaterialWeight :{
        type:String,
        required:true
    },    
    loaderMobileNumber :{
        type:String,
        required:true
    },
    
    unloadingSite :{
        type:String
    },
    
    unloadingDateTime:{
        type:Date
    },
    
    receivedWeight :{
        type:String
    },
    
    shortageOfMaterials:{
        type:String
    },

},{timestamps:true})


const VahanDetail=mongoose.model("vahanDetail",vahanSchema);
module.exports= VahanDetail;