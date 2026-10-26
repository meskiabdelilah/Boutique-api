import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
    maxlength: 300,
  },

  priceCents: {
    type: Number,
    required: true,
    validate: {
      validator: (value) =>
        Number.isSafeInteger(value) && value > 0,
      message: "Price must be a positive integer",
    },
  },

  available: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;