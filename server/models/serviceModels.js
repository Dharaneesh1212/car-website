import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  personname: {
    type: String,
    required: true,
  },
  carnumber: {
    type: String,
    required: true,
    min: [8, "Number must contains atleast 9 characters"],
  },
  carname: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
