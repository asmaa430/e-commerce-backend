import express from "express";
import { getCart, addToCart, updateCartItem, removeFromCart } from "../controllers/cartController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/",protect, getCart);
router.post("/",protect, addToCart);
router.patch("/:id",protect, updateCartItem);
router.delete("/:id",protect, removeFromCart);

export default router;