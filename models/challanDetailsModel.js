const mongoose=require("mongoose");

const CreateChallan=new mongoose.Schema({

transporterName:
{
    type:String,
    required:true,
    trim:true

}
,

materialName:
{
    type:String,
    required:true,
    trim:true

},

receiverPartyName:
{
    type:String,
    required:true,
    trim:true
},

vehicleNumber:
{
    type:String,
    required:true,
     trim:true,
     unique:true
},
gpsImeiNumber:
{
    type:Number,
    required:true,
    trim:true,
    unique:true
},

driverName:
{ 
    type:String,
    required:true,
    trim:true
},

driverContactNumber:
{
    type:Number,
    required:true,
    trim:true,
    unique:true
},

loadingSite:
{
    type:String,
    required:true,
    trim:true
},

loadingDateAndTime:
{
    type:String,
    required:true,
    trim:true
},

loaderName:
{
    type:String,
    required:true,
    trim:true
},

challanAndRoyalityNumber:
{
    type:Number,
    required:true,
    trim:true
}, 

doNumber:
{
    type:String,
    required:true,
    trim:true
}
    ,

freight: 
{
    type:String,
    required:true,
    trim:true
},

qualityOfMaterials : 
{
    type:String,
    required:true,
    trim:true
},

tpNumber:
{
    type:Number,
    required:true,
    trim:true,
    unique:true

}, 

grossWeight:
{
    type:String,
    required:true,
    trim:true
},

tareWeight: 
{
    type:String,
    required:true,
    trim:true
},


netMaterialWeight:{
    type:String,
    required:true,
    trim:true   

},

loaderMobileNumber:
{
    type:Number,
    required:true,
    trim:true,
    unique:true

},

loadingSite:
{
    type:String,
    required:true,
    trim:true
},

unloadingDateAndTime:
{
    type:String,
    required:true,
    trim:true
},

receivedWeight:
{
    type:String,
    required:true,
    trim:true
},

shortageOfMaterials:
{
    type:String,
    required:true,
    trim:true

},

//PaymentDetails Schema

tds:{
    type:Number,
    required:true,
    trim:true,
    unique:true
    },
    
    advanced:{
        type:Number,
        required:true,
        trim:true
    }, 
    
    fuel:{
        type:Number,
        required:true,
        trim:true
    }, 
    
    pumpName:{
        type:String,
        required:true,
        trim:true
    
    },
    
    fuelInLiter:{
        type:String,
        trim:true,
        required:true
        
    }, 
    
    fuelInPrice:{
        type:Number,
        trim:true,
        required:true
        
    } ,
    
    fuelStationsChallanNumber:
    {
        type:Number,
        trim:true,
        required:true
        
        
    },
    
    sealingDate:{
        type:Date,
        trim:true,
        required:true
        
        
       
    },
    
    sealingPoint:{
        type:String,
        trim:true,
        required:true
        
       
    },
    
    sealingColour:{
       type:String,
       trim:true,
       required:true
        
        
    
    }, 
    
    totalSealQuantity:
    {
        type:Number,
        trim:true
        
        
    },

    //Imagespic schema
    gpsImeiPic:
    {
   type:String,
   trim:true,
  required:true

    },
    vehicleNumberPlate:
    {
        type:String,
        trim:true,
       required:true
    },
    driverPic:
    {
        type:String,
        trim:true,
       required:true
    },
    sealingImages:
    {
        type:String,
        trim:true,
       required:true
    },
    vehicleImages:
    {
        type:String,
        trim:true,
       required:true
    }

},{timestamps:true})
module.exports=new mongoose.model("createChallanDetails",CreateChallan);
