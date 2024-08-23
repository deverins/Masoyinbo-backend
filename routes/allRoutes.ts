import express from "express";
import { apiRoutes } from "./api";
import authRoutes from "./auth";
export const routers = express.Router();
export const errorRoute = express.Router();

routers.use("/auth", authRoutes);
routers.use("/api", apiRoutes)



errorRoute.get("/error", (req, res) => {
    throw new Error("Test error"); 
});