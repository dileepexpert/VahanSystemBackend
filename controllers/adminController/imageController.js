const Image=require("../../models/imageDetailsModel")
const imgCreate =async(req,res)=>{
    try {
        const data=req.body;
        const saveData=await Image.create(data);
        res.status(201).send ({Message:"Data is created sucessfully:",saveData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not created:",error});
    }
}


const imgFetch=async(req,res)=>{
  try {
 
      const getUser=await Image.find()
      if(!getUser){
          return res.status(401).send({message:"not found details"})  
      }
      res.status(200).send({message:"data fetched successfully",getUser})
  } catch (error) {
      console.error("error",error)
      res.status(500).send({message:"internal server error",error})
  }
}


const imgUpdate=async(req,res)=>{
  try {
      const {id}=req.params
      const data=req.body
      const getUser=await Image.findOne({_id:id})
      if(!getUser){
          return res.status(401).send({message:"Particular Id related details not found"})  
      }
      const updateUser=await Image.updateOne({_id:id},{$set:data})
      res.status(200).send({message:"data updated successfully",updateUser})
  } catch (error) {
      console.error("error",error)
      res.status(500).send({message:"internal server error",error})
  }
}



const imgDeleted=async(req,res)=>{
    try {
        const data=req.body;
        const deleteData=await Image.deleteOne(data);
        res.status(201).send ({Message:"Data is deleted sucessfully:",deleteData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not deleted:",error});
    }
}



const imgSearched=async(req,res)=>{
    try {
        const data=req.body;
        const searchData=await Image.find();
       
        res.status(201).send ({Message:"Data is searched sucessfully:",searchData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not searched:",error});
    }
}

module.exports={imgCreate,imgFetch,imgUpdate,imgDeleted,imgSearched}