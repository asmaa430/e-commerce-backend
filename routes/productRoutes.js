import express from "express";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
// لازم قبل اي route نحط protect انه ميدل وير بيك التوكن
router.post("/",protect, adminOnly,createProduct); // admin
router.patch("/:id",protect, adminOnly, updateProduct);
router.delete("/:id",protect, adminOnly, deleteProduct);

export default router;
