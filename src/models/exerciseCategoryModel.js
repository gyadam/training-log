import mongoose from "mongoose";

const exerciseCategorySchema = new mongoose.Schema({
  category: String,
});

const exerciseCategory = mongoose.model(
  "exerciseCategory",
  exerciseCategorySchema
);

export default exerciseCategory;
