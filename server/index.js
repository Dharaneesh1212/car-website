import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { UserRouter } from "./routes/userRoute.js";
import createRoute from "./routes/serviceRoute.js";
import router from "./routes/amcServiceRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const CONNECTION_URL = process.env.CONNECTION_URL;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("running successfully");
});

// Routes for authentication
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/create", createRoute);
app.use("/api/v1/amccreate", router);

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
