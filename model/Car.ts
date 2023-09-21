import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slogan: {
      type: String,
      trim: true,
      required: true,
    },

    priceFrom: {
      type: Number,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Hatchback", "Sedan", "SUV", "HYBRID"],
    },

    tier: {
      type: String,
      required: true,
      enum: ["Hạng A", "Hạng B", "Hạng C", "Hạng D", "Hạng E"],
    },

    registration: { type: Number },

    avatar: { type: String, required: true },

    mainInfo: {
      type: {
        seats: Number,
        gear: String,
        fuel: String,
        engine: String,
      },
    },

    colors: [{ type: { color: String, colorImg: String, colorText: String } }],

    carLines: [
      {
        type: {
          name: String,
          price: Number,
          tax: String,
        },
      },
    ],
    brochure: { type: String },
  },
  { timestamps: true }
);

const Car = mongoose.models?.Car || mongoose.model("Car", CarSchema);

export default Car;
