import {
  amcCreateService,
  amcUpdateServiceId,
  amcDeleteServiceId,
  amcAllServices,
  amcServiceByName,
} from "../controller/serviceController.js";
import express from "express";

const router = express.Router();

// create
// POST => http://localhost:8000/api/v1/service
router.post("/service", amcCreateService);

// get
// GET => http://localhost:8000/api/v1/service
router.get("/allservice", amcAllServices);

// GET => http://localhost:8000/api/v1/service
router.get("/servicebyname/:personname", amcServiceByName);

// update
// PUT => http://localhost:8000/api/v1/service/id
router.put("/:id", amcUpdateServiceId);

// delete
// DELETE => http://localhost:8000/api/v1/service/id
router.delete("/:id", amcDeleteServiceId);

export default router;
