
const Vahan=require("../../models/challanDetailsModel")

const createData=async(req,res)=>{
    try {
        console.log("fdsfdsfds",req.body)
        const data=req.body
        const createUser=await Vahan.create(data)
        res.status(201).send({message:"data saved successfully",createUser})
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
}

const getData=async(req,res)=>{
    try {
        const getUser=await Vahan.find()
        if(getUser.length===0){
            return res.status(401).send({message:"No details found"})  
        }
        res.status(200).send({message:"data fetched successfully",getUser})
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
}

const getDataById=async(req,res)=>{
    try {
        const {id}=req.params
        const getUser=await Vahan.findOne({_id:id})
        if(!getUser){
            return res.status(401).send({message:"Particular Id related details not found"})  
        }
        res.status(200).send({message:"data fetched successfully",getUser})
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
}

const updateData=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const getUser=await Vahan.findOne({_id:id})
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


const deleteData=async(req,res)=>{
    try {
        const {id}=req.params;
        const getUser=await Vahan.findOne({_id:id})
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

const searchData=async(req,res)=>{
    try {
        const data=req.body
        const searchUser=await Vahan.find(data)
        if(searchUser.length===0){
            return res.status(401).send({message:"no details found"})  
        }
        res.status(200).send({message:"data searched successfully",searchUser})
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
}


module.exports={createData,getData,getDataById,updateData,deleteData,searchData}