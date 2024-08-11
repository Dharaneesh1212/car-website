import express from "express";
import {
  signup,
  signin,
  forgotpassword,
  resetpassword,
  verifyuser,
} from "../controller/authController.js";

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
router.get("/verify", verifyuser);

export default router;
