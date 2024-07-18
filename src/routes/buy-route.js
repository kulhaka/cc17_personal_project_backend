const express = require("express");
const authenticate = require("../middlewares/authenticate");
const buyController = require("../controllers/buy-controller");

const buyRouter = express.Router();

buyRouter.post("/gem", authenticate, buyController.gem);
buyRouter.post("/fate", authenticate, buyController.fate);

module.exports = buyRouter;
