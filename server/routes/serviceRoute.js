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
router.post("/service", createService);

// get
// GET => http://localhost:8000/api/v1/service
router.get("/allservice", allServices);

// GET => http://localhost:8000/api/v1/service
router.get("/servicebyname/:personname", serviceByName);

// update
// PUT => http://localhost:8000/api/v1/service/id
router.put("/:id", updateServiceId);

// delete
// DELETE => http://localhost:8000/api/v1/service/id
router.delete("/:id", deleteServiceId);

export default router;
