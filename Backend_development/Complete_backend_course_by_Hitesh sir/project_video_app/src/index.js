import { config } from "dotenv";
config();
import connectDB from "./db/index.js";
import { app } from "./app.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () =>
      console.log(`app started at http://localhost:${process.env.PORT || 8000}`)
    );
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!!", error);
  });

app.get("/", (req, res) => {
  return res.send("meo");
});

app.get("/api", (req, res) => {
  return res.json({
    name: "Irfan",
  });
});
