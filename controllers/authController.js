import Auth from "../models/authModel.js";
import bcrypt from "bcryptjs"

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
    return res.json({
      message: "User created successfully",
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
    return res.json({
      message: "Login successful"
    });
  } catch (error) {
    return res.json({
        message:error.message
    })
  }
};
