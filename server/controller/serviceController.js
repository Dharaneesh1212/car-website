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
    const updateId = await Service.findByIdAndUpdate (req.params.id,{$set:req.body},{new:true});
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
    res.status(200).json({ success: true, message:"Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
