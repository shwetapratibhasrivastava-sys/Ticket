import express from "express"
import { create, deleteCrud, get, getById, update } from "../controllers/crudController.js"


const crudRoute=express.Router()
crudRoute.post("/create",create)
crudRoute.get("/get",get)
crudRoute.get("/getbyid/:id",getById)
crudRoute.put("/update/:id",update)
crudRoute.delete("/delete/:id",deleteCrud)


export default crudRoute