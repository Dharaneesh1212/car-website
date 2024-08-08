import Service from "../models/serviceModels.js";

// Create a new service
export const create = async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update an existing service by ID
export const update = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    res.status(200).json({ success: true, data: updatedService });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a service by ID
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await Service.findByIdAndDelete(id);
    if (!deletedService) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    res.status(200).json({ success: true, message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all services
export const all = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a service by ID
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get services by username
export const serviceByUsername = async (req, res) => {
  try {
    const services = await Service.find({ username: req.params.username });
    if (!services.length) {
      return res.status(404).json({ success: false, message: "No services found for this username" });
    }
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all AMC services
export const getAmc = async (req, res) => {
  try {
    const amcServices = await Service.find({ amc: true });
    res.status(200).json({ success: true, data: amcServices });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get services
export const getService = async (req, res) => {
  try {
    const amcServices = await Service.find({ amc: false });
    res.status(200).json({ success: true, data: amcServices });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
