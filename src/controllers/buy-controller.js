const buyService = require("../services/buy-service");
const createError = require("../utils/create-error");

const buyController = {};

buyController.gem = async (req, res, next) => {
  try {
    if (
      !(
        (req.body.amount === 60 && req.body.price === 35) ||
        (req.body.amount === 300 && req.body.price === 179) ||
        (req.body.amount === 980 && req.body.price === 549) ||
        (req.body.amount === 1980 && req.body.price === 1100) ||
        (req.body.amount === 3280 && req.body.price === 1800) ||
        (req.body.amount === 6480 && req.body.price === 3700) ||
        (req.body.amount === 3000 && req.body.price === 179)
      )
    ) {
      createError({
        message: "invalid purchase",
        statusCode: 400,
      });
    }

    if (req.body.bonus) {
      req.body.amount *= 2;
    } else {
      switch (req.body.amount) {
        case 6480:
          req.body.amount = 8080;
          break;
        case 3280:
          req.body.amount = 3880;
          break;
        case 1980:
          req.body.amount = 2240;
          break;
        case 980:
          req.body.amount = 1090;
          break;
        case 300:
          req.body.amount = 330;
          break;
        default:
          req.body.amount;
      }
    }

    await buyService.addSpentCashAmountByIdAndAmount(
      req.user.id,
      req.body.price
    );
    const userData = await buyService.addGemByIdAndAmount(
      req.user.id,
      req.body.amount
    );
    res.status(200).json({ userData });
  } catch (err) {
    next(err);
  }
};

buyController.fate = async (req, res, next) => {
  try {
    if (
      !(
        req.body.currency === "gem" ||
        req.body.currency === "starglitter" ||
        req.body.currency === "stardust"
      )
    ) {
      createError({
        message: "invalid request",
        statusCode: 400,
      });
    }

    if (req.body.currency === "gem") {
      const userGem = await buyService.checkGemById(req.user.id);
      if (userGem.gem < req.body.amount * 160) {
        createError({
          message: "not enough primogems",
          statusCode: 400,
        });
      }

      await buyService.deductGemByIdAndAmount(
        req.user.id,
        req.body.amount * 160
      );

      await buyService.addSpentGemAmountByIdAndAmount(
        req.user.id,
        req.body.amount * 160
      );
    }

    if (req.body.currency === "starglitter") {
      const userStarglitter = await buyService.checkStarglitterById(
        req.user.id
      );
      if (userStarglitter.starglitter < req.body.amount * 5) {
        createError({
          message: "not enough starglitter",
          statusCode: 400,
        });
      }

      await buyService.deductStarglitterByIdAndAmount(
        req.user.id,
        req.body.amount * 5
      );
    }

    if (req.body.currency === "stardust") {
      const userStardust = await buyService.checkStardustById(req.user.id);
      if (userStardust.stardust < req.body.amount * 75) {
        createError({
          message: "not enough stardust",
          statusCode: 400,
        });
      }

      await buyService.deductStardustByIdAndAmount(
        req.user.id,
        req.body.amount * 75
      );
    }

    if (req.body.type === "intertwinedFate") {
      const userData = await buyService.buyIntertwinedFateByIdAndAmount(
        req.user.id,
        req.body.amount
      );
      res.status(200).json({ userData });
    }
    if (req.body.type === "acquaintFate") {
      const userData = await buyService.buyAcquaintFateByIdAndAmount(
        req.user.id,
        req.body.amount
      );
      res.status(200).json({ userData });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = buyController;
