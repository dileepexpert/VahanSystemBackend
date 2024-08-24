const admin=require("../../../model/createchallan")
const admin1=require("../../../model/imagedetailsmodel")
const admin2=require("../../../model/paymentmodel")


//============create=======
const createAdmin=async(req,res)=>{
    try {
        const data=req.body;
        const saveData=await admin.create(data);
        res.status(201).send({message:"Created Data Successfully",saveData})
    } catch (error) {
        res.status(500).send({message:"Created Data Successfully",error})
    }
}
//============fetch========
const fetchAdmin=async(req,res)=>{
    try {
        const data=req.body;
        const findData=await admin.find(data);
        res.status(201).send({message:"Created Data Successfully",findData})
    } catch (error) {
        res.status(500).send({message:"Created Data Successfully",error})
    }
}

//============update=======
const updateAdmin=async(req,res)=>
{
    try {
        const {id}=req.params;
        const data=req.body; 
        const updateData=await admin.updateOne({_id:id},{$set:data})
        res.status(201).send({message:"Updated Data Successfully",updateData})

    } catch (error) {
        console.log("Error:",error);
        res.status(500).send({message:"Data are not Updated"})
    }
}

//============delete=======
const deleted=async(req,res)=>{
    try {
        const {id}=req.params;
        
        const deleteData=await admin.deleteOne({_id:id});
        res.status(201).send({message:"Deleted data Successfully",deleteData});

    } catch (error) {
       console.log("Error",error);
       res.status(500).send({message:"Data are not deleted",error});
        
    }
}



//============search=======

const searched=async(req,res)=>{
    try {
        const data=req.body;
        const searchData=await admin.find(data);
        res.status(201).send({message:"Created Data Successfully",searchData})
    } catch (error) {
        res.status(500).send({message:"Created Data Successfully",error})
    }
}












module.exports={createAdmin,fetchAdmin,updateAdmin,deleted,searched}