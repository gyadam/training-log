import express from "express";
import User from "../models/userModel.js";

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { email, firstName, lastName, weight, height, dob } = req.body;

  const newUser = new User({
    email,
    firstName,
    lastName,
    weight,
    height,
    dob,
  });

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const router = express.Router();

router.get("/:id", getUser);
router.post("/", createUser);

export default router;
