import express from "express";
import {
  CreateProperty,
  GetAllProperties,
  GetPropertyByID,
  PostPropertyReview,
} from "../controllers/PropertyController";
import { AuthMiddleware, propertyImageListMiddleWare } from "../middleware";

const router = express.Router();

router.use(AuthMiddleware);
router.get("/", GetAllProperties);
router.get("/:id", GetPropertyByID);
router.post("/", propertyImageListMiddleWare, CreateProperty);
router.post("/post/:id", PostPropertyReview);

export { router as PropertyRouter };
