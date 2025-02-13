import mongoose from "mongoose";
import { min } from "three/tsl";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      min: [6, "password must be atleast 6 characters"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
