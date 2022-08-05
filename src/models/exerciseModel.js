import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  duration: {
    type: Number,
    required: true,
  },
  prepTime: {
    type: Number,
    required: true,
  },
  numSets: {
    type: Number,
    required: true,
  },
  numReps: {
    type: Number,
    required: true,
  },
  repTime: {
    type: Number,
    required: true,
  },
  restBetweenReps: {
    type: Number,
    required: true,
  },
  restBetweenSets: {
    type: Number,
    required: true,
  },
  resistance: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  isAssessment: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
