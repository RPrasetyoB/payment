import express, { Request, Response, NextFunction } from "express";
import v1Router from "./v1";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Renaldi Payment API",
    version: "1.0.0",
  });
});

router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.status(err.status || 500);
  res.json({ success: false, message: err.message });
});

router.use("/api/v1", v1Router);

export default router;
