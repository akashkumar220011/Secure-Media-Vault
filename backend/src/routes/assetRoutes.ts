import express from "express";
import auth from "../middleware/authMiddleware";
import upload from "../middleware/uploadMiddleware";
import { uploadAsset, getMyAssets } from "../controllers/assetController";

const router = express.Router();

router.post("/upload", auth, upload.single("file"), uploadAsset);
router.get("/my-assets", auth, getMyAssets);

export default router;
