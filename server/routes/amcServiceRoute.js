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
router.post("/amcservice", amcCreateService);

// get
// GET => http://localhost:8000/api/v1/service
router.get("/amcallservice", amcAllServices);

// GET => http://localhost:8000/api/v1/service
router.get("/amcservicebyname/:personname", amcServiceByName);

// update
// PUT => http://localhost:8000/api/v1/service/id
router.put("/:id", amcUpdateServiceId);

// delete
// DELETE => http://localhost:8000/api/v1/service/id
router.delete("/:id", amcDeleteServiceId);

export default router;
