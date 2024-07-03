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
    const { id } = req.params;
    const updateId = await Service.findByIdAndUpdate(id, req.body);
    res.status(200).json({ success: true, data: updateId });
  } catch (error) {
    res.statue(500).json({ success: false, message: error.message });
  }
};
// delete
export const deleteServiceId = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteId = await Service.findByIdAndDelete(id);
    res.status(200).json({ success: true, data: deleteId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
