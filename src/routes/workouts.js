import express from "express";
import Workout from "../models/workoutModel.js";

export const getWorkouts = async (req, res) => {
  const { userId } = req.body;

  try {
    const workouts = await Workout.find({ user: userId });

    res.status(200).json(workouts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createWorkout = async (req, res) => {
  const {
    userId: user,
    exerciseId: exercise,
    notes,
    exertion,
    completed,
    date,
  } = req.body;

  const newWorkout = new Workout({
    user,
    exercise,
    notes,
    exertion,
    completed,
    date,
  });

  try {
    await newWorkout.save();

    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedWorkout = await Workout.findOneAndDelete(id);

    res.status(200).json(deletedWorkout);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const router = express.Router();

router.get("/", getWorkouts);
router.post("/", createWorkout);
router.delete("/:id", deleteWorkout);

export default router;
