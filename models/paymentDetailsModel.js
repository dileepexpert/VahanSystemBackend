const mongoose=require("mongoose");

const payment=new mongoose.Schema({

TDS:{
type:Number

},

Advanced:{
    type:Number
   
}, 

Fuel:{
    type:Number
   
}, 

PumpName:{
    type:String

},

FuelInLiter:{
    type:Number
    
}, 

FuelInPrice:{
    type:Number
    
} ,

FuelStationsChallanNumber:{
    type:Number
    
},

SealingDate:{
    type:Number
   
},

SealingPoint:{
    type:String
   
},

SealingColour:{
   type:String

}, 

TotalsealQuantity:{
    type:Number
    
}
},{timestamps:true})

const User=new mongoose.model("paymentDetail",payment);
module.exports=User;