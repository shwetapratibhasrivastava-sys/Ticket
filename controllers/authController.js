import Auth from "../models/authModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        message: "All fields are required",
      });
    }

    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const auth = await Auth.create({
      name,
      email,
      password: hashedPassword,
    });
    
    const token = jwt.sign({ id: auth._id, email: auth.email },
       process.env.JWT_SECRET,
        {
      expiresIn: "7d",
    });

    return res.json({
      message: "User created successfully",
      token,
      data: auth,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        message: "All fields are required",
      });
    }

    const exisiting = await Auth.findOne({ email });
    if (!exisiting) {
      return res.json({ message: "User doesn't exists" });
    }

    const valid = await bcrypt.compare(password, exisiting.password);
    if (!valid) {
      return res.json({
        message: "Invalid password",
      });
    }
    
    const token = jwt.sign({ id: exisiting._id, email: exisiting.email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({
      message: "Login successful",
      token,
      data: exisiting
    });
  } catch (error) {
    return res.json({
        message:error.message
    })
  }
};


