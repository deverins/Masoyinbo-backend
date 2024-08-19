import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Welcome to Másòyìnbó Project" });
});

// Not found middleware
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found on our server" });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const message = err.message || "An unexpected error occurred";
  const stack = process.env.NODE_ENV === "development" ? err.stack : undefined;
  res.status(500).json({ message, stack });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
