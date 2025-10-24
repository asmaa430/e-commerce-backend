import express from "express";
import { protect,adminOnly } from "../middlewares/authMiddleware.js";
import { getCategories, createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/",protect,adminOnly, createCategory); // admin
router.patch("/:id",protect,adminOnly, updateCategory);
router.delete("/:id",protect,adminOnly, deleteCategory);

export default router;
