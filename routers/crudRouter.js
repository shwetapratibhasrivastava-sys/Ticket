import express from "express"
import { create, deleteCrud, get, getById, update } from "../controllers/crudController.js"


const crudRoute=express.Router()
crudRoute.post("/create",create)
crudRoute.get("/get",get)
crudRoute.get("/getbyid",getById)
crudRoute.put("/update",update)
crudRoute.delete("/delete",deleteCrud)


export default crudRoute