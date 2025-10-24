
import express from "express";
import  {protect} from "../middlewares/authMiddleware.js";

import { getProfile, updateProfile } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile/:id",protect, getProfile);
router.patch("/profile/:id", protect ,updateProfile);


export default router;
