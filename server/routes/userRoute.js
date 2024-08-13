import express from "express";
import {
  signup,
  signin,
  forgotpassword,
  resetpassword,
} from "../controller/authController.js";
import { verifyUser } from "../controller/authController.js";

const router = express.Router();

// POST => http://localhost:8000/api/user/register
router.post("/register", signup);

// POST => http://localhost:8000/api/user/login
router.post("/login", signin);

// POST => http://localhost:8000/api/user/forgotpassword
router.post("/forgotpassword", forgotpassword);

// POST => http://localhost:8000/api/user/forgotpassword
router.post("/resetpassword/:token", resetpassword);

// GET => http://localhost:8000/api/user/verify
router.get("/verify", verifyUser);

// GET => http://localhost:8000/api/user/verify
// router.get("/verify", verifyUser, (req, res) => {
//   return res.json({ status: true, message: "User verified successfully" });
// });

export default router;
