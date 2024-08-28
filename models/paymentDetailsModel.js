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

Pumpname:{
    type:String
},

Fuelinliter:{
    type:Number
}, 

Fuelinprice:{
    type:Number
} ,

FuelstationschallanNumber:{
    type:Number
},

Sealingdate:{
    type:Number
},

Sealingpoint:{
    type:String
},

Sealingcolour:{
    type:String
}, 

Totalsealquantity:{
type:Number
}
},{timestamps:true})

const User=new mongoose.model("paymentDetail",payment);
module.exports=User;