import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import users from "./routes/users.js";
import notes from "./routes/notes.js";
import exercises from "./routes/exercises.js";
import workouts from "./routes/workouts.js";

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/users", users);
app.use("/notes", notes);
app.use("/exercises", exercises);
app.use("/workouts", workouts);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
