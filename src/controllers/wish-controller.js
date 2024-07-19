const { RARITY, BANNER_TYPE } = require("../constants");
const bannerService = require("../services/banner-service");
const rollService = require("../services/roll-service");
const userInfoService = require("../services/user-info-service");
const wishingService = require("../services/wishing-service");
const createError = require("../utils/create-error");

const wishController = {};

wishController.wishing = async (req, res, next) => {
  // CHECK REQUEST //
  try {
    if (!req.body.bannerId) {
      createError({
        message: "invalid request",
        statusCode: 400,
      });
    }

    if (!(req.body.amount === 1 || req.body.amount === 10)) {
      createError({
        message: "invalid request",
        statusCode: 400,
      });
    }

    // GENERATE BANNER ITEMS FOR SPECIFIC BANNER //

    const bannerType = (
      await bannerService.findBannerByBannerId(req.body.bannerId)
    ).type;

    const bannerSSRItem =
      await bannerService.findBannerItemsByRarityAndBannerId(
        RARITY.SSR,
        req.body.bannerId
      );

    const bannerSRItem = await bannerService.findBannerItemsByRarityAndBannerId(
      RARITY.SR,
      req.body.bannerId
    );

    const bannerRItem = await bannerService.findBannerItemsByRarityAndBannerId(
      RARITY.R,
      req.body.bannerId
    );

    const rollResult = [];

    for (i = 0; i < req.body.amount; i++) {
      // CHECK BEFORE START WISHING //

      const userInfo = await userInfoService.findUserInfoById(req.user.id);

      if (!userInfo) {
        createError({
          message: "invalid request",
          statusCode: 400,
        });
      }

      const checkIntertwinedFate = () => {
        if (userInfo.intertwinedFate < req.body.amount - i) {
          createError({
            message: "not enough intertwined fate",
            statusCode: 400,
          });
        }
      };

      const checkAcquaintFate = () => {
        if (userInfo.acquaintFate < req.body.amount - i) {
          createError({
            message: "not enough acquaint fate",
            statusCode: 400,
          });
        }
      };

      // GENERATE RARITY //

      let rollRarity;
      if (bannerType === BANNER_TYPE.CHARACTER) {
        checkIntertwinedFate();
        rollRarity = wishingService.wishRarity(
          bannerType,
          userInfo.charPity,
          userInfo.charSRPity
        );
      }
      if (bannerType === BANNER_TYPE.WEAPON) {
        checkIntertwinedFate();
        rollRarity = wishingService.wishRarity(
          bannerType,
          userInfo.weaponPity,
          userInfo.weaponSRPity
        );
      }
      if (bannerType === BANNER_TYPE.STANDARD) {
        checkAcquaintFate();
        rollRarity = wishingService.wishRarity(
          bannerType,
          userInfo.standardPity,
          userInfo.standardSRPity
        );
      }

      // GENERATE RANDOM UNIT FROM SPECIFIC RARITY POOL //

      let rollUnitArr;
      if (rollRarity === RARITY.SSR) {
        if (bannerType === BANNER_TYPE.CHARACTER) {
          rollUnitArr = wishingService.wishUnit(
            bannerType,
            bannerSSRItem,
            userInfo.charSSRGuarantee,
            0,
            0
          );
        }
        if (bannerType === BANNER_TYPE.WEAPON) {
          rollUnitArr = wishingService.wishUnit(
            bannerType,
            bannerSSRItem,
            userInfo.weaponSSRGuarantee,
            userInfo.weaponChartCourse,
            userInfo.selectedWeaponId
          );
        }
        if (bannerType === BANNER_TYPE.STANDARD) {
          rollUnitArr = wishingService.wishUnit(
            bannerType,
            bannerSSRItem,
            false,
            0,
            0
          );
        }
      }

      if (rollRarity === RARITY.SR) {
        if (bannerType === BANNER_TYPE.CHARACTER) {
          rollUnitArr = wishingService.wishUnit(
            bannerType,
            bannerSRItem,
            userInfo.charSRGuarantee,
            0,
            0
          );
        }
        if (bannerType === BANNER_TYPE.WEAPON) {
          rollUnitArr = wishingService.wishUnit(
            bannerType,
            bannerSRItem,
            userInfo.weaponSRGuarantee,
            0,
            0
          );
        }
        if (bannerType === BANNER_TYPE.STANDARD) {
          rollUnitArr = wishingService.wishUnit(
            bannerType,
            bannerSRItem,
            false,
            0,
            0
          );
        }
      }

      if (rollRarity === RARITY.R) {
        rollUnitArr = wishingService.wishUnit(
          bannerType,
          bannerRItem,
          false,
          0,
          0
        );
      }

      const rollUnit = rollUnitArr[0];

      const gotGuarantee = rollUnitArr[1];

      if (!rollUnit) {
        createError({
          message: "internal server error",
          statusCode: 500,
        });
      }

      // SET NEW PITY //

      if (bannerType === BANNER_TYPE.CHARACTER) {
        if (rollRarity === RARITY.SSR) {
          await userInfoService.resetCharPityById(req.user.id);
          await userInfoService.setCharSSRGuaranteeById(
            req.user.id,
            gotGuarantee
          );
        }
        if (rollRarity === RARITY.SR) {
          await userInfoService.resetCharSRPityById(req.user.id);
          await userInfoService.addCharPityById(req.user.id);
          await userInfoService.setCharSRGuaranteeById(
            req.user.id,
            gotGuarantee
          );
        }
        if (rollRarity === RARITY.R) {
          await userInfoService.addCharSRPityById(req.user.id);
          await userInfoService.addCharPityById(req.user.id);
        }
        await userInfoService.reduceIntertwinedFateByIdAndAmount(
          req.user.id,
          1
        );
      }

      if (bannerType === BANNER_TYPE.WEAPON) {
        if (rollRarity === RARITY.SSR) {
          if (userInfo.selectedWeaponId) {
            const isChartCourseWeapon =
              rollUnit.weapon.id === userInfo.selectedWeaponId;
            if (isChartCourseWeapon) {
              await userInfoService.resetWeaponChartCourseById(req.user.id);
              await userInfoService.resetWeaponSelectById(req.user.id);
            } else {
              await userInfoService.addWeaponChartCourseById(req.user.id);
            }
          }
          await userInfoService.resetWeaponPityById(req.user.id);
          await userInfoService.setWeaponSSRGuaranteeById(
            req.user.id,
            gotGuarantee
          );
        }
        if (rollRarity === RARITY.SR) {
          await userInfoService.resetWeaponSRPityById(req.user.id);
          await userInfoService.addWeaponPityById(req.user.id);
          await userInfoService.setWeaponSRGuaranteeById(
            req.user.id,
            gotGuarantee
          );
        }
        if (rollRarity === RARITY.R) {
          await userInfoService.addWeaponSRPityById(req.user.id);
          await userInfoService.addWeaponPityById(req.user.id);
        }
        await userInfoService.reduceIntertwinedFateByIdAndAmount(
          req.user.id,
          1
        );
      }

      if (bannerType === BANNER_TYPE.STANDARD) {
        if (rollRarity === RARITY.SSR) {
          await userInfoService.resetStandardPityById(req.user.id);
        }
        if (rollRarity === RARITY.SR) {
          await userInfoService.resetStandardSRPityById(req.user.id);
          await userInfoService.addStandardPityById(req.user.id);
        }
        if (rollRarity === RARITY.R) {
          await userInfoService.addStandardSRPityById(req.user.id);
          await userInfoService.addStandardPityById(req.user.id);
        }
        await userInfoService.reduceAcquaintFateByIdAndAmount(req.user.id, 1);
      }

      // ADD STARGLITTER, STARDUST //

      if (rollRarity === RARITY.R) {
        await userInfoService.addStardustById(req.user.id);
      }
      if (rollRarity === RARITY.SR) {
        if (rollUnit.character) {
          const charCount = await rollService.getCharRollByIdAndCharId(
            req.user.id,
            rollUnit.character.id
          );
          if (charCount.length >= 7) {
            await userInfoService.addStarglitterByIdAndAmount(req.user.id, 5);
          } else if (charCount.length >= 1) {
            await userInfoService.addStarglitterByIdAndAmount(req.user.id, 2);
          }
        }
        if (rollUnit.weapon) {
          await userInfoService.addStarglitterByIdAndAmount(req.user.id, 2);
        }
      }
      if (rollRarity === RARITY.SSR) {
        if (rollUnit.character) {
          const charCount = await rollService.getCharRollByIdAndCharId(
            req.user.id,
            rollUnit.character.id
          );
          if (charCount.length >= 7) {
            await userInfoService.addStarglitterByIdAndAmount(req.user.id, 25);
          } else if (charCount.length >= 1) {
            await userInfoService.addStarglitterByIdAndAmount(req.user.id, 10);
          }
        }
        if (rollUnit.weapon) {
          await userInfoService.addStarglitterByIdAndAmount(req.user.id, 10);
        }
      }
      // ADD FINAL RESULT //

      await rollService.addNewRollByIdAndBannerItemID(req.user.id, rollUnit.id);
      rollResult.push(rollUnit);
    }

    rollResult.map((item) => {
      if (item.character) {
        if (
          item.character.fullImg &&
          !item.character.fullImg.startsWith("http")
        ) {
          item.character.fullImg = `${req.protocol}://${req.get("host")}${
            item.character.fullImg
          }`;
        }
        if (
          item.character.iconImg &&
          !item.character.iconImg.startsWith("http")
        ) {
          item.character.iconImg = `${req.protocol}://${req.get("host")}${
            item.character.iconImg
          }`;
        }
      }
      if (item.weapon) {
        if (item.weapon.fullImg && !item.weapon.fullImg.startsWith("http")) {
          item.weapon.fullImg = `${req.protocol}://${req.get("host")}${
            item.weapon.fullImg
          }`;
        }
        if (item.weapon.iconImg && !item.weapon.iconImg.startsWith("http")) {
          item.weapon.iconImg = `${req.protocol}://${req.get("host")}${
            item.weapon.iconImg
          }`;
        }
      }
      return item;
    });
    res.status(201).json({ rollResult });
  } catch (err) {
    next(err);
  }
};

module.exports = wishController;
