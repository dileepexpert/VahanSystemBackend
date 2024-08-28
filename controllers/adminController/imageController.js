
const Image=require("../../models/imageDetailsModel")

const createImage=async(req,res)=>{
    try {
        const data=req.body 
        // console.log("data",data)
        const createUser=await Image.create(data)
        res.status(201).send({message:"data saved successfully",createUser})
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
}


const updateImage=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const getUser=await Image.findOne({_id:id})
        if(!getUser){
            return res.status(401).send({message:"Particular Id related details not found"})  
        }
        const updateUser=await Vahan.updateOne({_id:id},{$set:data})
        res.status(200).send({message:"data updated successfully",updateUser})
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
}


const deleteImage=async(req,res)=>{
    try {
        const {id}=req.params;
        const getUser=await Image.findOne({_id:id})
        if(!getUser){
            return res.status(401).send({message:"Particular Id related details not found"})  
        }
        const deleteUser=await Vahan.deleteOne({_id:id});
        res.status(200).send({message:"data deleted successfully",deleteUser})
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
}



module.exports={createImage,updateImage,deleteImage}