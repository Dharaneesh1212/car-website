import Service from "../models/serviceModels.js";

// create
export const createService = async (req, res) => {
  try {
    const service = await new Service(req.body).save();
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// update
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
// delete
export const deleteServiceId = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteId = await Service.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// get all services
export const allServices = async (req, res) => {
  try {
    const service = await Service.find();
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// get service by name
export const serviceByName = async (req, res) => {
  try {
    const service = await Service.findOne({ name: req.query.name });
    if (!service) {
      return res.status(404).json({ message: "service not found" });
    }
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
