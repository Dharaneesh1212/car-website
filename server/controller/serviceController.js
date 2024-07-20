import Service from "../models/serviceModels.js";
import AmcService from "../models/amcModels.js";

// create for service
export const createService = async (req, res) => {
  try {
    const service = await new Service(req.body).save();
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// create for amc service
export const amcCreateService = async (req, res) => {
  try {
    const service = await new AmcService(req.body).save();
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// update for service
export const updateServiceId = async (req, res) => {
  try {
    const updateId = await Service.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ success: true, data: updateId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// update for amc service
export const amcUpdateServiceId = async (req, res) => {
  try {
    const updateId = await AmcService.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ success: true, data: updateId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// delete for service
export const deleteServiceId = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteId = await Service.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// delete for amc service
export const amcDeleteServiceId = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteId = await AmcService.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get all services for service
export const allServices = async (req, res) => {
  try {
    const service = await Service.find();
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// get all services for amc service
export const amcAllServices = async (req, res) => {
  try {
    const service = await AmcService.find();
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// get service by name for services
export const serviceByName = async (req, res) => {
  try {
    const service = await Service.find({
      personname: req.params.personname,
    });
    if (!service) {
      return res.status(404).json({ message: "service not found" });
    }
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// get service by name for amc services
export const amcServiceByName = async (req, res) => {
  try {
    const service = await AmcService.find({
      personname: req.params.personname,
    });
    if (!service) {
      return res.status(404).json({ message: "service not found" });
    }
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
