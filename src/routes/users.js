import express from "express";
import User from "../models/userModel.js";

const getUsers = async (_, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const router = express.Router();

router.get("/", getUsers);

export default router;
