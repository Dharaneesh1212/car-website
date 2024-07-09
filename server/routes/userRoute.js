import express from "express";
import { User } from "../models/userModels.js";

const router = express.Router();

// signup
router.post("signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "user already exist" });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  await newUser.save();
  return res.json({status:true ,message:"user created successfully"})
});

