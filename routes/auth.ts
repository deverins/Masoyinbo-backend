import express from "express";
export const authRoutes = express.Router();

authRoutes.post("/signup");
authRoutes.post("/verifyOTP");
authRoutes.post("/resendOTP");
