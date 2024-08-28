const mongoose=require("mongoose");

const paymentSchema=new mongoose.Schema({
    tds:
    {
        type:String,
        required:true,
    },

    advanced :
    {
        type:String,
        required:true
    },
    
    fuel:
    {
        type:String,
        required:true
    }, 
    
    pumpName:
    {
        type:String,
        required:true
    },
    
    fuelInLiter:
    {
        type:String,
        required:true
    }, 
    
    fuelInPrice :
    {
        type:String,
        required:true
    },
    
    fuelStationsChallanNumber:
    {
        type:String,
        required:true
    },
    
    sealingDate:
    {
        type:String,
        required:true
    },
    
    sealingPoint:
    {
        type:String,
        required:true
    },
    
    sealingColour :
    {
        type:String,
        required:true
    },
    
    totalSealQuantity :
    {
        type:String,
        required:true
    }
},{timestamps:true})


const paymentFuelDetail=mongoose.model("payment fuel Detail",paymentSchema);
module.exports= paymentFuelDetail;