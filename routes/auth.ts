import express from "express";
export const authRoutes = express.Router();

authRoutes.post("/signup");
authRoutes.post("/verify-otp");
authRoutes.post("/resend-otp");
