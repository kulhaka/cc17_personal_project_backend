const bannerService = require("../services/banner-service");
const rollService = require("../services/roll-service");
const userInfoService = require("../services/user-info-service");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");

const pageController = {};

pageController.getBanner = async (req, res, next) => {
  try {
    const bannerData = await bannerService.getBannerInfo();
    bannerData.map(
      (e) => (e.img = `${req.protocol}://${req.get("host")}${e.img}`)
    );
    console.log(bannerData);
    res.status(200).json(bannerData);
  } catch (err) {
    next(err);
  }
};

pageController.getChartCourse = async (req, res, next) => {
  try {
    const existedBanner = await bannerService.findBannerByBannerId(
      +req.params.bannerId
    );
    if (!existedBanner) {
      createError({
        message: "invalid banner",
        statusCode: 400,
      });
    }
    const chartCourseData = await bannerService.getWeaponChartCourse(
      +req.params.bannerId
    );

    res.status(200).json(chartCourseData);
  } catch (err) {
    next(err);
  }
};

pageController.setCourse = async (req, res, next) => {
  try {
    const user = await userService.findUserById(req.body.userId);
    if (!user) {
      createError({
        message: "invalid user",
        statusCode: 400,
      });
    }

    const existedWeapon = await bannerService.findWeaponByWeaponId(
      req.body.weaponId
    );
    if (!existedWeapon) {
      createError({
        message: "invalid weapon",
        statusCode: 400,
      });
    }

    await userInfoService.setSelectedWeapon(req.body.userId, req.body.weaponId);
    res.status(200).json({ message: "course set" });
  } catch (err) {
    next(err);
  }
};

pageController.getRollHistory = async (req, res, next) => {
  try {
    const rollHistory = await rollService.getRollById(req.user.id);
    res.status(200).json({ rollHistory });
  } catch (err) {
    next(err);
  }
};

pageController.deleteRollHistory = async (req, res, next) => {
  try {
    await rollService.deleteRollById(req.user.id);
    await userInfoService.deleteUserInfoById(req.user.id);
    await userInfoService.createUserInfo({ userId: req.user.id });
    res.status(200).json({ message: "data reset and wish history deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = pageController;
