import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  enhanceProfessionalSummary,
  uploadResume,enhanceJobDescription
} from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.post("/enhanced-pro-sum", authMiddleware, enhanceProfessionalSummary);

aiRouter.post("/enhanced-job-desc", authMiddleware, enhanceJobDescription);

aiRouter.post("/upload-resume", authMiddleware, uploadResume);

export default aiRouter;
