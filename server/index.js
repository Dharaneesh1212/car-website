import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("running successfully");
});

app.listen(PORT, () => {
  console.log(`server is running in http://localhost:${PORT}`);
});