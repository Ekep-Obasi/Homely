import express from "express";
import {
  CreateUser,
  EditUserProfile,
  GetAllUsers,
  GetUserID,
  GetUserProfile,
  PostUserReview,
  RecoverPassword,
  ResetPassword,
  UserLogin,
} from "../controllers";
import { AuthMiddleware, profileImageMiddleWare } from "../middleware";

const router = express.Router();

router.post("/login", UserLogin);
router.post("/signup", CreateUser);
router.post("/password-recovery", RecoverPassword);
router.post("/reset-password/:id", ResetPassword);

// Protected Routes
router.use(AuthMiddleware);
router.get("/profile", GetUserProfile);
router.patch("/profile/edit", profileImageMiddleWare, EditUserProfile);
router.get("/", GetAllUsers);
router.get("/:id", GetUserID);
router.post("/post/:id", PostUserReview);

export { router as UserRouter };
