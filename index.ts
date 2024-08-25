// index.ts
import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/dbConnection";
import { errorRoute, routers } from "./routes/allRoutes";

// Load environment variables based on the current environment
if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 8081;

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(errorRoute); 

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Welcome to Másòyìnbó Project" });
});

/** Routes */
app.use("/v1", routers);

/** Not found middleware */
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found on our server" });
});

/**
 * Error handling middleware
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const message = err.message || "An unexpected error occurred";
  const stack = process.env.NODE_ENV === "development" ? err.stack : undefined;
  res.status(500).json({ message, stack });
});

/** Export app for testing */
export default app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}