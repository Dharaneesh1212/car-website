import express from "express";
import { signup, signin } from "../controller/authController.js";

const router = express.Router();

// POST => http://localhost:8000/api/user/register
router.post("/register", signup);

// POST => http://localhost:8000/api/user/login
router.post("/login", signin);

export default router;
