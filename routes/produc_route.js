const express = require("express");
const app = express();
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProduct,
} = require("../controllers/product_controller.js");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProduct);

module.exports = router;
