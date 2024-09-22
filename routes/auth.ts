import express from "express";
import { createParticipant } from '../controllers/participants';
import { ValidatorMDW } from '../validators/authHandler';
import { authenticateUser, createUser, getUserByEmail, updateUser, } from "../controllers/user";

const authRoutes = express.Router();

authRoutes.post("/signup", ValidatorMDW, createUser);
authRoutes.post("/login", ValidatorMDW, authenticateUser);
authRoutes.put("/update-user/:username", updateUser);
authRoutes.get("/get-user", getUserByEmail);
authRoutes.post("/create-participant", ValidatorMDW, createParticipant);

export default authRoutes;