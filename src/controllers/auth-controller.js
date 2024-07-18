const userService = require("../services/user-service");
const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");
const createError = require("../utils/create-error");
const userInfoService = require("../services/user-info-service");

const authController = {};

authController.register = async (req, res, next) => {
  try {
    const data = req.input;
    const existedUser = await userService.findUserByUsername(data.username);

    if (existedUser) {
      createError({
        message: "username is already in use",
        statusCode: 400,
      });
    }

    if (data.email) {
      const existedEmail = await userService.findUserByEmail(data.email);

      if (existedEmail) {
        createError({
          message: "email is already in use",
          statusCode: 400,
        });
      }
    }

    data.password = await hashService.hash(data.password);
    await userService.createUser(data);

    delete data.password;

    const newUserInfoId = {
      userId: (await userService.findUserByUsername(data.username)).id,
    };
    await userInfoService.createUserInfo(newUserInfoId);

    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

authController.login = async (req, res, next) => {
  try {
    const data = req.input;
    const existedUser = await userService.findUserByUsername(data.username);

    const invalidCredential = () => {
      createError({
        message: "invalid credentials",
        statusCode: 400,
      });
    };

    if (!existedUser) {
      invalidCredential();
    }

    const isMatch = await hashService.compare(
      data.password,
      existedUser.password
    );

    if (!isMatch) {
      invalidCredential();
    }

    const accessToken = jwtService.sign({ id: existedUser.id });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

authController.getMe = async (req, res, next) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (err) {
    next(err);
  }
};

authController.getUserInfo = async (req, res, next) => {
  try {
    const userData = await userInfoService.findUserInfoById(req.user.id);
    res.status(200).json({ userData });
  } catch (err) {
    next(err);
  }
};

authController.editProfile = async (req, res, next) => {
  try {
    if (!req.input.email && !req.input.password) {
      createError({
        message: "no update information",
        statusCode: 400,
      });
    }

    if (req.input.email === req.user.email) {
      createError({
        message: "email is already registered",
        statusCode: 400,
      });
    }

    const userCurrentData = await userService.findUserById(req.user.id);

    const isMatch = await hashService.compare(
      req.input.currentPassword,
      userCurrentData.password
    );
    if (!isMatch) {
      createError({
        message: "invalid credentials",
        statusCode: 400,
      });
    }

    if (req.input.password) {
      const isMatchOld = await hashService.compare(
        req.input.password,
        userCurrentData.password
      );
      if (isMatchOld) {
        createError({
          message: "password is already registered",
          statusCode: 400,
        });
      }
    }
    let userData;
    if (req.input.email) {
      const existedEmail = await userService.findUserByEmail(req.input.email);

      if (existedEmail) {
        createError({
          message: "email is already in use",
          statusCode: 400,
        });
      }
      userData = await userService.updateEmailByIdAndEmail(
        req.user.id,
        req.input.email
      );
    }

    if (req.input.password) {
      req.input.password = await hashService.hash(req.input.password);
      userData = await userService.updatePasswordByIdAndPassword(
        req.user.id,
        req.input.password
      );
    }

    delete userData.password;

    res.status(200).json({ userData });
  } catch (err) {
    next(err);
  }
};

module.exports = authController;
