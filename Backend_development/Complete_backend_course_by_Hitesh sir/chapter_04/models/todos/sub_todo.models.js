// data validation, MongoDB validation

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      min: [6, "Must be atleast 6, got {VALUE}"],
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

export default User = mongoose.model("User", userSchema);
