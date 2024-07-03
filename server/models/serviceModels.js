import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  personName: {
    type: String,
    required: true,
  },
  carNumber: {
    type: String,
    required: true,
    min: [8, "Number must contains atleast 9 characters"],
  },
  carName: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
