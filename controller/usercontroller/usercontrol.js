const user=require("../../model/createchallan");
const user1=require("../../model/imagedetailsmodel");
const user2=require("../../model/paymentmodel");

//fetch 
const userfetched=async(req,res)=>
{
    try {
        const data=req.body;
        const findData=await user.find(data);
        res.status(201).send({message:"Fetched data successfully",findData})

    } catch (error) {
        console.log("Error:",error);
        res.status(500).send({message:"data not fatched",error})
        
    }

}

//search
const userSearch=async(req,res)=>
{
    try {
        const data=req.body;
        const searchData=await user.find(data);
        res.status(201).send({message:"searched data successfully",searchData})
    } catch (error) {
        res.status(201).send({message:"searched data successfully",error})
    }

}










module.exports={userfetched,userSearch}