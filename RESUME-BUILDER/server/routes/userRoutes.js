import express from "express";
import {
  loginUser,
  getUserById,
  registerUser,
  getUserResumes,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);

// Static routes MUST come before /:id
userRouter.get("/data", authMiddleware, getUserById);
userRouter.get("/resumes", authMiddleware, getUserResumes);

// Dynamic route last
userRouter.get("/:id", authMiddleware, getUserById);



export default userRouter;
