import mongoose from "mongoose";

const sub_todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    under: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamp: true }
);

export const SubTodo = mongoose.model("SubTodo", sub_todoSchema);
