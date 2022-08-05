import express from "express";
import Exercise from "../models/exerciseModel.js";
import ExerciseCategory from "../models/exerciseCategoryModel.js";

export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();

    res.status(200).json(exercises);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getExercise = async (req, res) => {
  const { id } = req.params;

  try {
    const exercise = await Exercise.findById(id);

    res.status(200).json(exercise);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createExercise = async (req, res) => {
  const {
    title,
    type,
    description,
    duration,
    prepTime,
    numSets,
    numReps,
    repTime,
    restBetweenReps,
    restBetweenSets,
    resistance,
    imageUrl,
    isAssessment,
  } = req.body;

  const newExercise = new Exercise({
    title,
    type,
    description,
    duration,
    prepTime,
    numSets,
    numReps,
    repTime,
    restBetweenReps,
    restBetweenSets,
    resistance,
    imageUrl,
    isAssessment,
  });

  try {
    await newExercise.save();

    res.status(201).json(newExercise);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createExerciseCategory = async (req, res) => {
  const { category } = req.body;

  const newExerciseCategory = new ExerciseCategory({
    category,
  });

  try {
    await newExerciseCategory.save();

    res.status(201).json(newExerciseCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getExerciseCategories = async (req, res) => {
  try {
    const exerciseCategories = await ExerciseCategory.find();

    res.status(200).json(exerciseCategories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const router = express.Router();

router.get("/", getExercises);
router.post("/", createExercise);
router.post("/types", createExerciseCategory);
router.get("/types", getExerciseCategories);
router.get("/:id", getExercise);

export default router;
