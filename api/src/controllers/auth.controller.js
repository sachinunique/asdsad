import User from "../models/user.model.js";
import bcrypt, { hashSync } from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const auth = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
   next(errorHandler(400,'All Fields are required'))
  }

  // haspasword
  const haspasword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: haspasword,
  });
  try {
    await newUser.save();
    res.status(200).json("signUp seccessfully");
  } catch (error) {
    next(error);
  }
};
