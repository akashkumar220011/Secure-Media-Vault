

import express from "express";
import cors from "cors";
import connectDB from "./config/db";

import authRoutes from "./routes/authRoutes";
import assetRoutes from "./routes/assetRoutes";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Test if env loaded
console.log("MONGO URI =", process.env.MONGO_URI);

connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/assets", assetRoutes);

export default app;
