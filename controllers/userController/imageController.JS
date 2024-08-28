const user=require("../../models/imageDetailsModel")
const imgFetch=async(req,res)=>{
    try {
   
        const getUser=await user.find()
        if(!getUser){
            return res.status(401).send({message:"not found details"})  
        }
        res.status(200).send({message:"data fetched successfully",getUser})
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
  }


  const imgSearched=async(req,res)=>{
    try {
        const data=req.body;
        const searchData=await user.find();
       
        res.status(201).send ({Message:"Data is searched sucessfully:",searchData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not searched:",error});
    }
}


module.exports={ imgFetch, imgSearched }