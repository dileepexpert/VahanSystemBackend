const mongoose=require("mongoose");
const createChallan=new mongoose.Schema({
    TransporterName:{
        type:String,
        require:true
    },
    MaterialName:{
        type:String,
        require:true
    },
    ReceiverpartyName:{
        type:String,
        require:true
    },
    VehicleNumber:{
        type:String,
        require:true
    },
    GpsIMEINumber:{
        type:String,
        require:true
    },
    DriverName:{
        type:String,
        require:true
    },
    DriverContactNumber :{
        type:Number,
        require:true
    },
    Loadingsite:{
        type:String,
        require:true
    },
    Loadingdateandtime:{
        type:Date,
        require:true
    },
    LoaderName:{
        type:String,
        require:true
    },
    ChallanNumber:{
        type:String,
        require:true
    },
    DONumber :{
        type:String,
        require:true
    },
    Freight :{
        type:String,
        require:true
    },
    Qualityofmaterials:{
        type:String,
        require:true
    },
    TPNumber:{
        type:String,
        require:true
    },
    Grossweight :{
        type:String,
        require:true
    },
    TareWeight:{
        type:String,
        require:true
    },
    Netmaterialweight:{
        type:String,
        require:true
    },
    Loadername:{
        type:String,
        require:true
    },
    Loadermobilenumber:{
        type:String,
        require:true
    },
    Netmaterialweight:{
        type:String,
        require:true
    },
    Unloadingsite:{
        type:String,
        require:true
    },
    Unloadingdateandtime:{
        type:String,
        require:true
    },
    ReceivedWeight:{
        type:String,
        require:true
    },
    ShortageOfmaterials:{
        type:String,
        require:true
    },
    



})


const challan=mongoose.model("Challandetail",createChallan);
module.exports=challan;

