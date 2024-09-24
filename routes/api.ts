import express from "express";
import { getParticipants, getPendingParticipants } from "../controllers/participants";
import { getEpisodeEventDetail, getPerformanceStats, createEpisodeEvents } from "../controllers/episode/episode-events";
import { createEpisode,  } from "../controllers/episode/episodes";
import { ValidatorMDW } from "../validators/authHandler";
export const apiRoutes = express.Router();

apiRoutes.get("/get-participants", getParticipants);
apiRoutes.get("/get-pending-participants", getPendingParticipants);
apiRoutes.post("/episode-events", ValidatorMDW, createEpisodeEvents);
apiRoutes.post("/episodes", createEpisode);
apiRoutes.get("/get-performance-stats", getPerformanceStats);
apiRoutes.get('/episode-events-by-episodeId', getEpisodeEventDetail);