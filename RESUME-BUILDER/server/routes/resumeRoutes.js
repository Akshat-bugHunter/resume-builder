import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createResume,
  deleteResume,
  getPublicResumeById,
  getResumeById,
  updateResume,
} from "../controllers/resumeController.js";
import upload from "../configs/multer.js";

const resumeRouter = express.Router();

resumeRouter.post("/create", authMiddleware, createResume);
resumeRouter.put("/update", upload.single("image"), authMiddleware, updateResume);
resumeRouter.delete("/delete/:resumeId", authMiddleware, deleteResume);
resumeRouter.get("/get/:resumeId", authMiddleware, getResumeById);
resumeRouter.get("/public/:resumeId", getPublicResumeById);

export default resumeRouter;