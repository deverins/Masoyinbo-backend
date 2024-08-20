import express from "express";
import { ValidatorMDW } from "../validators/authHandler";
export const authRoutes = express.Router();

authRoutes.post("/signup", ValidatorMDW);
authRoutes.post("/participant", ValidatorMDW);
