import express from "express";
import { User } from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// signup
router.post("/signup", async (req, res) => {
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
  return res.json({ status: true, message: "user created successfully" });
});

// signin
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ message: "user not registered" });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.json({ message: "password is incorrect" });
  }

  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // Requires HTTPS
    sameSite: none,
    maxAge: 360000, // Adjust based on your session timeout
  });

  return res.json({ status: true, message: "loged in successfully" });
});

export { router as UserRouter };
