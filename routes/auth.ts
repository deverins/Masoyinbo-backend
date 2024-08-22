import express from "express";
import { createParticipant } from '../controllers/participants';
import { ValidatorMDW } from '../validators/authHandler';
import { createUser } from "../controllers/user";

const authRoutes = express.Router();

authRoutes.post("/signup", ValidatorMDW, createUser);

authRoutes.post("/create-participant", ValidatorMDW, createParticipant);

export default authRoutes;
