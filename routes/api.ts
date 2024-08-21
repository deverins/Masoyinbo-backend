// routes/api.ts
import express from "express";
import { getParticipants } from "../controllers/participants";
export const apiRoutes = express.Router();

apiRoutes.get("/get-participants", getParticipants);
// apiRoutes.get("/episode");