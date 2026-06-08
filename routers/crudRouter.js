import express from "express"
import { create, deleteCrud, get, getById, update } from "../controllers/crudController.js"
import { auth } from "../middleware/authMiddleware.js"


const crudRoute=express.Router()
crudRoute.post("/create", auth, create)
crudRoute.get("/get", auth, get)
crudRoute.get("/getbyid/:id", auth, getById)
crudRoute.put("/update/:id", auth, update)
crudRoute.delete("/delete/:id", auth, deleteCrud)


export default crudRoute