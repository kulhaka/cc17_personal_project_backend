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

    chartCourseData.map((item) => {
      item.weapon.fullImg = `${req.protocol}://${req.get("host")}${
        item.weapon.fullImg
      }`;
      item.weapon.iconImg = `${req.protocol}://${req.get("host")}${
        item.weapon.iconImg
      }`;
      return item;
    });

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

    rollHistory.map((item) => {
      if (item.bannerItem.character) {
        if (
          item.bannerItem.character.fullImg &&
          !item.bannerItem.character.fullImg.startsWith("http")
        ) {
          item.bannerItem.character.fullImg = `${req.protocol}://${req.get(
            "host"
          )}${item.bannerItem.character.fullImg}`;
        }
        if (
          item.bannerItem.character.iconImg &&
          !item.bannerItem.character.iconImg.startsWith("http")
        ) {
          item.bannerItem.character.iconImg = `${req.protocol}://${req.get(
            "host"
          )}${item.bannerItem.character.iconImg}`;
        }
      }
      if (item.bannerItem.weapon) {
        if (
          item.bannerItem.weapon.fullImg &&
          !item.bannerItem.weapon.fullImg.startsWith("http")
        ) {
          item.bannerItem.weapon.fullImg = `${req.protocol}://${req.get(
            "host"
          )}${item.bannerItem.weapon.fullImg}`;
        }
        if (
          item.bannerItem.weapon.iconImg &&
          !item.bannerItem.weapon.iconImg.startsWith("http")
        ) {
          item.bannerItem.weapon.iconImg = `${req.protocol}://${req.get(
            "host"
          )}${item.bannerItem.weapon.iconImg}`;
        }
      }

      return item;
    });

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
