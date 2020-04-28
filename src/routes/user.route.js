const express = require("express");
const UserRouter = express.Router();
const UserModel = require("../model/user.model");

UserRouter.get("/", async (req, res, next) => {
  let users = await UserModel.fetchAllUser();
  res.status(200).send(users);
});

UserRouter.post("/login", async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let user = await UserModel.login(email, password);
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send({message:e.message});
  }
});

UserRouter.post("/register", async (req, res, next) => {
  try {
    let data = req.body;
    let user = await UserModel.register(data);
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = UserRouter;
