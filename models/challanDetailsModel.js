const mongoose=require("mongoose");

const challanSchema=new mongoose.Schema({

    transporterName:
    {
        type:String,
        required:true,
        trim:true
    },
    
    materialName:{
        type:String,
        required:true,
        trim:true
    },
    
    receiverPartyName:{
        type:String,
        required:true,
        trim:true
    },
    
    vehicleNumber :{
        type:String,
        required:true,
        trim:true,unique: true
    },
    
    gpsImeiNumber:{
        type:String,
        required:true,
        trim:true,unique:true
    },
    
    driverName:{
        type:String,
        required:true
        ,
        trim:true
    }, 
    
    driverContactNumber:{
        type:String,
        required:true,
        trim:true,unique:true
    }, 
    
    loadingSite :{
        type:String,
        required:true,
        trim:true
    },
    
    loadingDateTime:{
        type:Date,
        required:true,
        trim:true,
        // default:Date.now
    },
    
    loaderName:{
        type:String,
        required:true,
        trim:true
    },
    
    challanRoyaltyNumber:{
        type:String,
        required:true,
        trim:true,unique:true
    },
    
    doNumber :{
        type:String,
        required:true,
        trim:true,unique:true
    },
    
    freight :{
        type:String,
        required:true,
        trim:true
    },
    
    qualityOfMaterials:{
        type:String,
        required:true,
        trim:true
    },
    
    tpNumber :{
        type:String,
        required:true,
        trim:true,unique:true
    },
    
    grossWeight:{
        type:String,
        required:true
    },
    
    tareWeight:{
        type:String,
        required:true,
        trim:true
    },
    
    netMaterialWeight :{
        type:String,
        required:true,
        trim:true
    },    
    loaderMobileNumber :{
        type:String,
        required:true,
        trim:true
    },
    
    unloadingSite :{
        type:String,
        required:true,
        trim:true
    },
    
    unloadingDateTime:{
        type:Date,
        // required:true,
        trim:true,
        // default:Date.now
    },
    
    receivedWeight :{
        type:String,
        required:true,
        trim:true
    },
    
    shortageOfMaterials:{
        type:String,
        required:true,
        trim:true
    },
    // imageId:{ type: mongoose.Schema.Types.ObjectId, ref: 'imageDetail' },
    // paymentId:{ type: mongoose.Schema.Types.ObjectId, ref: 'payment fuelDetail' },
    

},{timestamps:true})


const VahanDetail=mongoose.model("challanDetail",challanSchema);
module.exports= VahanDetail;


console.log("Kumar")