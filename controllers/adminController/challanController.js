const Challan=require("../../models/challanDetailsModel")
const create =async(req,res)=>{
    try {
        const data=req.body;
        const saveData=await Challan.create(data);
        res.status(201).send ({Message:"Data is created sucessfully:",saveData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not created:",error});
    }
}


const fetch=async(req,res)=>{
  try {
    const page=req.query.page||1//by default page number
    const size=4;

 
      const getUser=await Challan.find()
      .skip((page-1)*size)
      .limit(size);
      if(!getUser){
          return res.status(401).send({message:"not found details"})  
      }
      res.status(200).send({message:"data fetched successfully",page,size,
        getUser})
  } catch (error) {
      console.error("error",error)
      res.status(500).send({message:"internal server error",error})
  }
}


const update=async(req,res)=>{
  try {
      const {id}=req.params
      const data=req.body
      const getUser=await Challan.findOne({_id:id})
      if(!getUser){
          return res.status(401).send({message:"Particular Id related details not found"})  
      }
      const updateUser=await Challan.updateOne({_id:id},{$set:data})
      res.status(200).send({message:"data updated successfully",updateUser})
  } catch (error) {
      console.error("error",error)
      res.status(500).send({message:"internal server error",error})
  }
}



// const deleted=async(req,res)=>{
//     try {
//         const data=req.body;
//         const deleteData=await Challan.deleteOne();
//         res.status(201).send ({Message:"Data is deleted sucessfully:",deleteData});
        
//     } catch (error) {
//       res.status(500).send ({Message:"Data is not deleted:",error});
//     }
// }
const deleted=async(req,res)=>{
  try {
      const {id}=req.params;
      const getUser=await Challan.findOne({_id:id})
      if(!getUser){
          return res.status(401).send({message:"Particular Id related details not found"})  
      }
      const deleteUser=await Challan.deleteOne({_id:id});
      res.status(200).send({message:"data deleted successfully",deleteUser})
  } catch (error) {
      console.error("error",error)
      res.status(500).send({message:"internal server error",error})
  }
}



const searched=async(req,res)=>{
    try {
        const data=req.body;
        const searchData=await Challan.find();
       
        res.status(201).send ({Message:"Data is searched sucessfully:",searchData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not searched:",error});
    }
}

module.exports={create,fetch,update,deleted,searched}