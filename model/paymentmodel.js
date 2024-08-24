const mongoose=require("mongoose");



const paymentDetails=new mongoose.Schema({
    TDS:{
        type:String,
        require:true
    },
    Advanced:{
        type:String,
        require:true
    },
    Netmaterialweight:{
        type:String,
        require:true
    },
    Fuel:{
        type:String,
        require:true
    },
    PumpName:{
        type:String,
        require:true
    },
    Fuelinliter:{
        type:String,
        require:true
    },
    Fuelinprice:{
        type:String,
        require:true
    },
    FuelstationschallanNumber:{
        type:String,
        require:true
    },
    Sealingdate:{
        type:String,
        require:true
    },
    Sealingcolour:{
        type:String,
        require:true
    },
    Totalsealquantity:{
        type:String,
        require:true
    },
})


const payment=mongoose.model("paymentDetails",paymentDetails);

module.exports=payment;