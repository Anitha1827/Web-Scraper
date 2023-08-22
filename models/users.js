const mongoose = require("mongoose");

// Define Product Schema
const productSchema = new mongoose.Schema({
  source: String,
  image: String,
  title: String,
  rating: String,
  price: String,
  finalPrice: String,
});

const Product = mongoose.model("Product", productSchema);
exports.Product = Product;
