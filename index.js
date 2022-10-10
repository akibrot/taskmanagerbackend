import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./routes/routes.js";
import mongoose from "mongoose";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
mongoose.connect(process.env.MongoDbUrl).then(() => {
  console.log("database connected");
});
app.listen(process.env.Port || 8080, () => {
  console.log("server started");
});
app.use(Routes);
