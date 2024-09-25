// routes/api.ts
import express from "express";
import { getParticipants, getPendingParticipants } from "../controllers/participants";
import { getEpisodeEventDetail, getPerformanceStats, createEpisodeEvents, deleteEpisodeEvent, editEpisodeEvent } from "../controllers/episode/episode-events";
import { createEpisode, getAllEpisodes,  } from "../controllers/episode/episodes";
import { ValidatorMDW } from "../validators/authHandler";
import { checkAdmin } from "../middlewares/episodeEventsMiddleware";
export const apiRoutes = express.Router();

apiRoutes.get("/get-participants", getParticipants);
apiRoutes.get("/get-pending-participants", getPendingParticipants);
apiRoutes.post("/episode-events", ValidatorMDW, createEpisodeEvents);
apiRoutes.post("/episodes", createEpisode);
apiRoutes.get("/episodes", getAllEpisodes);
apiRoutes.get("/get-performance-stats", getPerformanceStats);
apiRoutes.get('/episode-events-by-episodeId', getEpisodeEventDetail);
apiRoutes.put('/episodes/:id', checkAdmin, editEpisodeEvent);
apiRoutes.delete('/episodes/:id', checkAdmin, deleteEpisodeEvent);
