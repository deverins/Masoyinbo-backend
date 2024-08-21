// routes/allRoutes.ts
import express from "express";
import { apiRoutes } from "./api";
import authRoutes from "./auth";
export const routers = express.Router();

routers.use("/auth", authRoutes);
routers.use("/api", apiRoutes)
