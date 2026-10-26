import Product from "../models/Product.js";
import mongoose from "mongoose";

async function getProducts(req, res, next) {
  try {
    const products = await Product.find();

    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
}

async function getProductById(req, res, next) {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        error: { message: "Invalid product ID" },
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        error: { message: "Product not found" },
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
}

export { getProducts, getProductById };
