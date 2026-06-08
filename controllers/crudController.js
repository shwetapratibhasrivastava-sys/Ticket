import Crud from "../models/crudModel.js";

export const create = async (req, res) => {
  try {
    const { name, email, phone, person } = req.body;
    if (!name || !email || !phone || !person) {
      return res.json({
        message: "All fields are required",
      });
    }

    const existingOne = await Crud.findOne({ email });
    if (existingOne) {
      return res.json("Ticket is already booked");
    }

    const curdCreate = await Crud.create({
      name,
      email,
      phone,
      person,
    });

    return res.json({
      message: "Ticket booked successfully",
      data: curdCreate,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

export const get = async (req, res) => {
  try {
    const crudGet = await Crud.find();
    return res.json({
      message: "Ticket fetched successfully",
      data: crudGet,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const CrudGetById = await Crud.findById(req.params.id);
    return res.json({
      message: "Ticket fetched successfully",
      data: CrudGetById,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const CrudUpdated = await Crud.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json({
      message: "Ticket updated successfully",
      data: CrudUpdated,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};




export const deleteCrud=async(req,res)=>{
    try {
        const Crudelete=await Crud.findByIdAndDelete(req.params.id)
         return res.json({
      message: "Ticket deleted successfully",
      data: CrudUpdated,
    });
    } catch (error) {
        return res.json({
      message: error.message,
    });
    }
}
