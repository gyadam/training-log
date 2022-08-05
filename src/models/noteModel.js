import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    user: mongoose.Schema.Types.ObjectId,
    text: String,
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
