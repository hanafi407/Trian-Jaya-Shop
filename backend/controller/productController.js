import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@desc  Fetch single products
//@route  GET /api/products
//@access  Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

//@desc  Fetch single products
//@route  GET /api/products
//@access  Public
const getProductsById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product === null) {
      res.status(404);
      throw new Error("Product not found");
    } else {
      res.json(product);
    }
});

export{getProducts,getProductsById}