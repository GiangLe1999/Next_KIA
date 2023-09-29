import mongoose from "mongoose";

const TestDriveSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    hour: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    car: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const TestDrive =
  mongoose.models?.TestDrive || mongoose.model("TestDrive", TestDriveSchema);

export default TestDrive;
