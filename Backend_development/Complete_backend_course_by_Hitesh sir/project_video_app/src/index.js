import { config } from "dotenv";
config();
import { DB_NAME } from "./constants.js";
import mongoose from "mongoose";
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    console.log("connected to the database");
    app.listen(
      process.env.PORT,
      console.log(`App is running at "http://localhost:${process.env.PORT}"`)
    );
  } catch (error) {
    console.log("ERROR:", error);
    throw error;
  }
})();
