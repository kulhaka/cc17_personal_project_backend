const prisma = require("../models/prisma");

const userInfoService = {};

userInfoService.createUserInfo = (data) => prisma.userInfo.create({ data });

userInfoService.deleteUserInfoById = (userId) =>
  prisma.userInfo.delete({
    where: {
      userId,
    },
  });

userInfoService.findUserInfoById = (userId) =>
  prisma.userInfo.findFirst({
    where: {
      userId,
    },
  });

userInfoService.setSelectedWeapon = (userId, selectedWeaponId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      selectedWeaponId,
    },
  });

userInfoService.addCharPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      charPity: {
        increment: 1,
      },
    },
  });

userInfoService.addWeaponPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      weaponPity: {
        increment: 1,
      },
    },
  });

userInfoService.addStandardPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      standardPity: {
        increment: 1,
      },
    },
  });

userInfoService.addWeaponChartCourseById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      weaponChartCourse: {
        increment: 1,
      },
    },
  });

userInfoService.resetCharPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      charPity: 0,
    },
  });

userInfoService.resetWeaponPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      weaponPity: 0,
    },
  });

userInfoService.resetWeaponChartCourseById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      weaponChartCourse: 0,
    },
  });

userInfoService.resetWeaponSelectById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      selectedWeaponId: null,
    },
  });

userInfoService.resetStandardPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      standardPity: 0,
    },
  });

userInfoService.addCharSRPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      charSRPity: {
        increment: 1,
      },
    },
  });

userInfoService.addWeaponSRPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      weaponSRPity: {
        increment: 1,
      },
    },
  });

userInfoService.addStandardSRPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      standardSRPity: {
        increment: 1,
      },
    },
  });

userInfoService.resetCharSRPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      charSRPity: 0,
    },
  });

userInfoService.resetWeaponSRPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      weaponSRPity: 0,
    },
  });

userInfoService.resetStandardSRPityById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      standardSRPity: 0,
    },
  });

userInfoService.setCharSSRGuaranteeById = (userId, gotGuarantee) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      charSSRGuarantee: !gotGuarantee,
    },
  });

userInfoService.setWeaponSSRGuaranteeById = (userId, gotGuarantee) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      weaponSSRGuarantee: !gotGuarantee,
    },
  });

userInfoService.setCharSRGuaranteeById = (userId, gotGuarantee) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      charSRGuarantee: !gotGuarantee,
    },
  });

userInfoService.setWeaponSRGuaranteeById = (userId, gotGuarantee) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      weaponSRGuarantee: !gotGuarantee,
    },
  });

// MANAGING GEM AND CURRENCY STUFFS GO HERE

userInfoService.reduceIntertwinedFateByIdAndAmount = (userId, amount) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      intertwinedFate: {
        decrement: amount,
      },
    },
  });

userInfoService.reduceAcquaintFateByIdAndAmount = (userId, amount) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      acquaintFate: {
        decrement: amount,
      },
    },
  });

userInfoService.addStardustById = (userId) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      stardust: {
        increment: 15,
      },
    },
  });

userInfoService.addStarglitterByIdAndAmount = (userId, amount) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      starglitter: {
        increment: amount,
      },
    },
  });

module.exports = userInfoService;
