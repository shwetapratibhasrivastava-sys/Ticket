import mongoose from "mongoose"


const connectDb=async(req,res)=>{
    try {
        if(!process.env.MONGO_URI){
            return console.log("Mongodb is not accessible")
        }
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb connected successfully")
          } catch (error) {
        return console.log(error.message)
    }
}

export default connectDb