import express from "express";
import Note from "../models/noteModel.js";

export const getNotes = async (req, res) => {
  const { userId } = req.body;

  try {
    const notes = await Note.find({ user: userId });

    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNote = async (req, res) => {
  const { userId: user, text } = req.body;

  const newNote = new Note({
    user,
    text,
  });

  try {
    await newNote.save();

    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNote = await Note.findOneAndDelete(id);

    res.status(200).json(deletedNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
router.delete("/:id", deleteNote);

export default router;
