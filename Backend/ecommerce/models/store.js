const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1000",
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  category: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  stock: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
