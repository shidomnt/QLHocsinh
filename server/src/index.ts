import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db";

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`));
