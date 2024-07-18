const express = require("express");
const authenticate = require("../middlewares/authenticate");
const wishController = require("../controllers/wish-controller");

const wishRouter = express.Router();

wishRouter.post("/", authenticate, wishController.wishing);

module.exports = wishRouter;
