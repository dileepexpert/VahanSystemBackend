
const Challan=require("../../models/challanDetailsModel")

// const getData=async(req,res)=>{
//     try {
//         const getUser=await Vahan.find()
//         if(getUser.length===0){
//             return res.status(401).send({message:"No details found"})  
//         }
//         res.status(200).send({message:"data fetched successfully",getUser})
//     } catch (error) {
//         console.error("error",error)
//         res.status(500).send({message:"internal server error",error})
//     }
// }

const getData = async (req, res) => {
    try {
        // Get page and size from query parameters
        const page = req.query.page|| 1; // Default to page 1 if not provided
        const size =  2; // Default to size 10 if not provided
        
        // Calculate skip (offset)
        const skip = (page - 1) * size;

        // Fetch data with pagination
        const getUser = await Challan.find()
            .skip(skip)       // Skip the number of documents
            .limit(size);     // Limit the number of documents

        // Check if any documents were found
        if (getUser.length === 0) {
            return res.status(404).send({ message: "No details found" });
        }

        // Send response with pagination info
        res.status(200).send({
            message: "Data fetched successfully",
            page,
            size,
            totalResults: await Challan.countDocuments(), // Total number of documents in the collection
            totalPages: Math.ceil(await Vahan.countDocuments() / size), // Total number of pages
            data: getUser
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Internal server error", error });
    }
};

const getDataById=async(req,res)=>{
    try {
        const {id}=req.params
        const getUser=await Challan.findOne({_id:id})
        if(!getUser){
            return res.status(401).send({message:"Particular Id related details not found"})  
        }
        res.status(200).send({message:"data fetched successfully",getUser})
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
}


const searchData=async(req,res)=>{
    try {
        const data=req.body
        const searchUser=await Challan.find(data)
        if(searchUser.length===0){
            return res.status(401).send({message:"no details found"})  
        }
        res.status(200).send({message:"data searched successfully",searchUser})
    } catch (error) {
        console.error("error",error)
        res.status(500).send({message:"internal server error",error})
    }
}





module.exports={getData,getDataById,searchData}