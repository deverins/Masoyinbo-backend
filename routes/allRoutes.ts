import express from "express";
import { authRoutes } from "./auth";
import { apiRoutes } from "./api";
export const routers = express.Router();

routers.use("/auth", authRoutes)
routers.use("/auth", apiRoutes)
