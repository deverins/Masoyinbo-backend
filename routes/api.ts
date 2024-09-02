// routes/api.ts
import express from "express";
import { getParticipants } from "../controllers/participants";
import { getEpisodeStats, handleEpisodeEvent } from "../controllers/episode/handleEpisodeEvent";
import { createEpisode } from "../controllers/episode/createEpisode";
export const apiRoutes = express.Router();

apiRoutes.get("/get-participants", getParticipants);
apiRoutes.post("/episode-events", handleEpisodeEvent);
apiRoutes.get("/get-episode-stats", getEpisodeStats);
apiRoutes.post("/create-episode", createEpisode);