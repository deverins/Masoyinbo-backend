import express from "express";
export const apiRoutes = express.Router();

apiRoutes.get("/getparticipants");
apiRoutes.get("/episode");