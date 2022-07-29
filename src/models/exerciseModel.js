import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    sport: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    effort: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
