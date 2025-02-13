// Data modeling

import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    types: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      required: true,
      type: Number,
    },
    customer: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema],
      // type: [
      //   {
      //     productId: {
      //       types: mongoose.Schema.Types.ObjectId,
      //       ref: "Product",
      //     },
      //     quantity: {
      //       type: Number,
      //       required: true,
      //     },
      //   },
      // ],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"], // enum means choises
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
