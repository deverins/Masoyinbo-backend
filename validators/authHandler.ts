import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import {
  authenticateUserPayloadValidator,
  episodeEventPayloadValidator,
  participantsPayloadValidator,
  schemaValidatorHandler,
  signupPayloadValidator,
} from "./validatorsSchema";

/**
 * Maps request path to Joi validation schema
 * @param {string} path - Request path name
 * @returns {Joi.ObjectSchema | undefined} Joi schema corresponding to the path
 */
export const SchemaMapper = (path: string): Joi.ObjectSchema | undefined => {
  switch (path) {
    case "/signup":
      return signupPayloadValidator;
    case "/login":
      return authenticateUserPayloadValidator;
    case "/create-participant":
      return participantsPayloadValidator;
    case "/episode-events":
      return episodeEventPayloadValidator;
  }
};


/**
 * Middleware for validating request data
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 */
export const ValidatorMDW = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validatorSchema = SchemaMapper(req.path);
  if (!validatorSchema) {
    return res.status(404).json({ error: "Validation schema not found" });
  }
  const { valid, error } = await schemaValidatorHandler(
    validatorSchema,
    req.body
  );
  if (!valid) {
    return res.status(400).json({ error });
  }

  next();
};
