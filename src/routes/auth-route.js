const express = require("express");
const {
  registerValidator,
  loginValidator,
  editValidator,
} = require("../middlewares/validator");
const authController = require("../controllers/auth-controller");
const authenticate = require("../middlewares/authenticate");

const authRouter = express.Router();

authRouter.post("/register", registerValidator, authController.register);
authRouter.post("/login", loginValidator, authController.login);
authRouter.get("/me", authenticate, authController.getMe);
authRouter.get("/userinfo", authenticate, authController.getUserInfo);
authRouter.patch(
  "/profile",
  authenticate,
  editValidator,
  authController.editProfile
);

module.exports = authRouter;
