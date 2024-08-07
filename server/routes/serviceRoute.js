import {
  create,
  update,
  deleteService,
  all,
  serviceByUsername,
  getAmc,
  getServiceById,
} from "../controller/serviceController.js";
import express from "express";

const router = express.Router();

// POST: http://localhost:8000/api/service
router.post("/", create);

// GET: http://localhost:8000/api/service/all
router.get("/all", all);

// GET: http://localhost:8000/api/service/servicebyid
router.get("/servicebyid/:id", getServiceById);

// GET: http://localhost:8000/api/service/servicebyusername
router.get("/servicebyname/:username", serviceByUsername);

// PUT: http://localhost:8000/api/service/
router.put("/:id", update);

// DELETE: http://localhost:8000/api/service/
router.delete("/:id", deleteService);

// GET: http://localhost:8000/api/service/amc
router.get("/amc", getAmc);

export default router;
