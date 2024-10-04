import express from "express";
import { createParticipant } from '../controllers/episode/participants';
import { ValidatorMDW } from '../validators/authHandler';
import { authenticateUser, createUser, getAllUsers, getUserByEmail, updateUser, } from "../controllers/episode/user";

const authRoutes = express.Router();

authRoutes.post("/signup", ValidatorMDW, createUser);
authRoutes.post("/login", ValidatorMDW, authenticateUser);
authRoutes.put("/update-user/:username", updateUser);
authRoutes.get("/get-user", getUserByEmail);
authRoutes.get("/users", getAllUsers);
authRoutes.post("/create-participant", ValidatorMDW, createParticipant);

export default authRoutes;