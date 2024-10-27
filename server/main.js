import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import markerRoutes from "./routes/markerRoutes.js";
import campusRoutes from "./routes/campusRoutes.js";
import mapRoutes from "./routes/mapRoutes.js";
import botRouter from "./routes/botRoutes.js";
import botRoutes from "./routes/botRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Serve static files
app.use("/images", express.static(path.join(__dirname, "images")));

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();

// Route registration
app.use("/api/campus", campusRoutes);
app.use("/api/maps", mapRoutes);
app.use("/api/markers", markerRoutes);
app.use("/api/bots", botRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
