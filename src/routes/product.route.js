const express = require("express");
const ProductRouter = express.Router();
const ProductModel = require("../model/product.model");

ProductRouter.get("/", async (req, res, next) => {
  let products = await ProductModel.fetchAllProduct();
  res.status(200).send(products);
});
ProductRouter.post("/", async (req, res, next) => {
  let data = req.body;
  let products = await ProductModel.insertProduct(data);
  res.status(200).send(products);
});

module.exports = ProductRouter;
