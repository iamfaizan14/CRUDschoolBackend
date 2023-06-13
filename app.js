import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import studentRouter from "./routes/studentRoute.js";
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/v1/auth", studentRouter);

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "welcome to server",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
