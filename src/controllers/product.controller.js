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

async function createProduct(req, res, next) {
  try {
    const { name, description, priceCents, available } = req.body;
    const product = await Product.create({
      name,
      description,
      priceCents,
      available,
    });
    return res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Product id not valid",
        },
      });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: {
          message: "product not found",
        },
      });
    }
    const { name, description, priceCents, available } = req.body;
    if (name !== undefined) {
      product.name = name;
    }
    if (description !== undefined) {
      product.description = description;
    }
    if (priceCents !== undefined) {
      product.priceCents = priceCents;
    }
    if (available !== undefined) {
      product.available = available;
    }

    const saveProduct = await product.save();
    return res.status(200).json({
      success: true,
      data: saveProduct,
    });
  } catch (error) {
    next(error);
  }
}

export { getProducts, getProductById, createProduct, updateProduct };
