import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    height: Number,
    weight: Number,
    dob: String, // dob format: YYYY-MM-DD https://stackoverflow.com/questions/6764821
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
