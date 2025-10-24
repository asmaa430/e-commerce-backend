import express from "express";
import { createOrder, getOrders, getOrderById, updateOrderStatus } from "../controllers/orderController.js";
import {protect,adminOnly} from "../middlewares/authMiddleware.js"
const router = express.Router();

router.post("/",protect, createOrder);
router.get("/", getOrders);
router.get("/:id",protect, getOrderById);
router.patch("/:id",protect,adminOnly, updateOrderStatus); // admin

export default router;
