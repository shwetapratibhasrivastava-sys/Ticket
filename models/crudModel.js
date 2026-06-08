import mongoose from "mongoose";

const crudSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
     email:{
        type:String,
        required:true,
    },
     phone:{
        type:Number,
        required:true,
    },
     person:{
        type:Number,
        required:true,
    },
})

const Crud=mongoose.model("Crud",crudSchema)
export default Crud
