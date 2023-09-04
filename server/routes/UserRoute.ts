import express from "express";
import {
  CreateUser,
  EditUserProfile,
  GetAllUsers,
  GetUserID,
  GetUserProfile,
  PostUserReview,
  UserLogin,
} from "../controllers";
import { AuthMiddleware } from "../middleware";

const router = express.Router();

router.post("/login", UserLogin);
router.post("/signup", CreateUser);

router.use(AuthMiddleware);
router.get("/profile", GetUserProfile);
router.patch("/profile/edit", EditUserProfile);
router.get("/", GetAllUsers);
router.get("/:id", GetUserID);
router.post("/post/:id", PostUserReview);

export { router as UserRouter };
