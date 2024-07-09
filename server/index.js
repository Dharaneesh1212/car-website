import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.get("/", (req, res) => {
  res.send("running successfully");
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running in http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error on connecting to database", error);
  });
