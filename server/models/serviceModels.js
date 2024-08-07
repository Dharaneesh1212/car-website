import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  carnumber: {
    type: String,
    required: true,
    min: [8, "Number must contains atleast 9 characters"],
    unique: true,
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
    type: String,
    required: true,
  },
  amc: {
    type: Boolean,
    default: false,
  },
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
