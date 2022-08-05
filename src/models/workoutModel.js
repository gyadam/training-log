import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    exercise: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    notes: {
      type: String,
      trim: true,
    },
    exertion: {
      type: Number,
      required: true,
    },
    completed: {
      type: Number,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
