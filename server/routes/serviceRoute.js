import {
  create,
  update,
  deleteService,
  all,
  serviceByUsername,
  getAmc,
  getServiceById,
  getService,
} from "../controller/serviceController.js";
import express from "express";
import { verifyJWT } from "../middleware/index.js";

const router = express.Router();

// POST: http://localhost:8000/api/service
router.post("/", create);

// GET: http://localhost:8000/api/service/all
router.get("/all",verifyJWT, all);

// GET: http://localhost:8000/api/service/servicebyid
router.get("/servicebyid/:id",verifyJWT, getServiceById);

// GET: http://localhost:8000/api/service/servicebyusername
router.get("/servicebyname/:username",verifyJWT, serviceByUsername);

// PUT: http://localhost:8000/api/service/
router.put("/:id", update);

// DELETE: http://localhost:8000/api/service/
router.delete("/:id", deleteService);

// GET: http://localhost:8000/api/service/amc
router.get("/amc",verifyJWT, getAmc);

// GET: http://localhost:8000/api/service/service
router.get("/service",verifyJWT, getService);

export default router;
