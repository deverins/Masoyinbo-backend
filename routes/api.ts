import express from "express";
import { getEpisodeEventDetail, getPerformanceStats, createEpisodeEvent, deleteEpisodeEvent, editEpisodeEvent } from "../controllers/episode/episode-events";
import { ValidatorMDW } from "../validators/authHandler";
import { createEpisode, getAllEpisodes } from "../controllers/episode/episodes";
import { getParticipantResults, getParticipants } from "../controllers/episode/participants";
export const apiRoutes = express.Router();

apiRoutes.get("/get-participants", getParticipants);
apiRoutes.get("/get-participants-result", getParticipantResults);
apiRoutes.post("/episode-events", ValidatorMDW, createEpisodeEvent);
apiRoutes.put("/episode-events/:id", editEpisodeEvent);
apiRoutes.delete('/episode-events/:id', deleteEpisodeEvent);
apiRoutes.post("/episodes", createEpisode);
apiRoutes.get("/episodes", getAllEpisodes);
apiRoutes.get("/get-performance-stats", getPerformanceStats);
apiRoutes.get('/episodes/:id', getEpisodeEventDetail);
