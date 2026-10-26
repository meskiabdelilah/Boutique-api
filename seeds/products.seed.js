
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "../src/config/db.js";
import Product from "../src/models/Product.js";

async function seedProducts() {
  try {
    await connectDB();

    await Product.deleteMany({});

    await Product.insertMany([
      {
        name: "Mechanical Keyboard",
        description: "RGB mechanical keyboard",
        priceCents: 25000,
        available: true,
      },
      {
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse",
        priceCents: 12000,
        available: true,
      },
      {
        name: "USB-C Hub",
        description: "Multiport USB-C adapter",
        priceCents: 18000,
        available: true,
      },
      {
        name: "Laptop Stand",
        description: "Adjustable aluminum laptop stand",
        priceCents: 15000,
        available: true,
      },
      {
        name: "Gaming Headset",
        description: "Headset with microphone",
        priceCents: 30000,
        available: false,
      },
    ]);

    console.log("Products seeded successfully");
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedProducts();
