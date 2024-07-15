import {
  createService,
  updateServiceId,
  deleteServiceId,
  allServices,
  serviceByName,
} from "../controller/serviceController.js";
import express from "express";

const router = express.Router();

// create
// POST => http://localhost:8000/api/v1/service
// POST => http://localhost:8000/api/v1/amc
router.post("/service", createService);
router.post("/amc", createService);

// get
// GET => http://localhost:8000/api/v1/sevice
// GET => http://localhost:8000/api/v1/amc
router.get("/service",allServices);
router.get("amc", allServices);
// GET => http://localhost:8000/api/v1/sevice
// GET => http://localhost:8000/api/v1/amc
router.get("/service",serviceByName);
router.get("amc", serviceByName);

// update
// PUT => http://localhost:8000/api/v1/service/id
// PUT => http://localhost:8000/api/v1/amc/id
router.put("/:id", updateServiceId);

// delete
// DELETE => http://localhost:8000/api/v1/service/id
// DELETE => http://localhost:8000/api/v1/amc/id
router.delete("/:id", deleteServiceId);

export default router;
