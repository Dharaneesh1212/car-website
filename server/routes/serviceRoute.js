import {
  createService,
  updateServiceId,
  deleteServiceId,
} from "../controller/serviceController";
import express from "express";

const router = express.Router();

// create
// POST => http://localhost:8000/api/v1/service
// POST => http://localhost:8000/api/v1/amc
router.post("/service", createService);
router.post("/amc", createService);

// update
// PUT => http://localhost:8000/api/v1/service/id
// PUT => http://localhost:8000/api/v1/amc/id
router.put("/id", updateServiceId);

// delete
// DELETE => http://localhost:8000/api/v1/service/id
// DELETE => http://localhost:8000/api/v1/amc/id
router.delete("/id", deleteServiceId);
