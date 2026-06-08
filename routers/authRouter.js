import express from "express"
import { login, register, getProfile } from "../controllers/authController.js"
import { auth } from "../middleware/authMiddleware.js"


const authRouter=express.Router()
authRouter.post("/register",register)
authRouter.post("/login",login)


export default authRouter