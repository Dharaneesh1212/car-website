import mongoose from "mongoose";

const amcServiceSchema = new mongoose.Schema({
  personname: {
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
    type: Boolean,
    default: false,
  },
  package: {
    type: Boolean,
    default: false,
  },
});

const AmcService = mongoose.model("AmcService", amcServiceSchema);

export default AmcService;
