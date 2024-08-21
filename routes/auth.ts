import express from "express";
import { createParticipant } from '../controllers/participants';
import { ValidatorMDW } from '../validators/authHandler';

const authRoutes = express.Router();

authRoutes.post("/signup", ValidatorMDW);

authRoutes.post("/create-participant", ValidatorMDW, createParticipant);

export default authRoutes;
