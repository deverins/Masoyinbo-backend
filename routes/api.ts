import express from "express";
import { getEpisodeEventDetail, getPerformanceStats, createEpisodeEvent, deleteEpisodeEvent, editEpisodeEvent } from "../controllers/episode/episode-events";
import { ValidatorMDW } from "../validators/authHandler";
import { createEpisode, deleteEpisode, editEpisode, getAllEpisodes } from "../controllers/episode/episodes";
import { getAllParticipants, getParticipantById, getParticipantResults } from "../controllers/episode/participants";
export const apiRoutes = express.Router();

apiRoutes.get("/get-participants", getAllParticipants);
apiRoutes.get("/get-participant/:id", getParticipantById);
apiRoutes.get("/get-participants-result", getParticipantResults);
apiRoutes.post("/episode-events", ValidatorMDW, createEpisodeEvent);
apiRoutes.put("/episode-events/:id", editEpisodeEvent);
apiRoutes.delete('/episode-events/:id', deleteEpisodeEvent);
apiRoutes.post("/episodes", createEpisode);
apiRoutes.put("/episode/:id", editEpisode);
apiRoutes.delete("/episode/:id", deleteEpisode);
apiRoutes.get("/episodes", getAllEpisodes);
apiRoutes.get("/get-performance-stats", getPerformanceStats);
apiRoutes.get('/episodes/:id', getEpisodeEventDetail);