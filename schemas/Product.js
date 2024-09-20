import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  enable: {
    type: Boolean,
    required: true,
    default: true
  },
  category: {
    type: String,
    required: true,
  },
  dimensions: {
    heigth: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    depth: {
      type: Number,
      required: true,
    },
  },
});

export const Product = model("Product", productSchema);