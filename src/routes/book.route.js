const express = require("express");
const BookRoute = express.Router();
const BookModel = require("../model/book.model");

BookRoute.get("/", async (req, res, next) => {
  let books = await BookModel.onFetch()
  res.status(200).send(books);
});
BookRoute.post("/", async (req, res, next) => {
  let data = req.body;
  let book = await BookModel.onInsert(data);
  res.status(200).send(book);
});

module.exports = BookRoute;