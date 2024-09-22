import express from "express";
import { getParticipants } from "../controllers/participants";
import { getGlobalPerformanceStats, getEpisodeEventDetail, getEpisodeStats, handleEpisodeEvent } from "../controllers/episode/handleEpisodeEvent";
import { createEpisode, getPendingParticipants } from "../controllers/episode/createEpisode";
import { ValidatorMDW } from "../validators/authHandler";
export const apiRoutes = express.Router();

apiRoutes.get("/get-participants", getParticipants);
apiRoutes.get("/get-pending-participants", getPendingParticipants);
apiRoutes.post("/episode-events", ValidatorMDW, handleEpisodeEvent);
apiRoutes.get("/get-episode-stats", getEpisodeStats);
apiRoutes.post("/create-episode", createEpisode);
apiRoutes.get('/episode-events-details', getEpisodeEventDetail);
apiRoutes.get('/participant-performance', getGlobalPerformanceStats);