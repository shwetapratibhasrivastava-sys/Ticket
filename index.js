import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/db.js"
import crudRoute from "./routers/crudRouter.js"
import authRouter from "./routers/authRouter.js"



dotenv.config()

const app=express()
const PORT= process.env.PORT||8000

connectDb();

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
return res.json("Api is running")
})

app.use("/api/crud",crudRoute)
app.use("auth/auth",authRouter)

app.listen(PORT,()=>{
    return console.log(`server is running on Port ${PORT}`)
    })




