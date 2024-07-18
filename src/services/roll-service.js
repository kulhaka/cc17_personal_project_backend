const prisma = require("../models/prisma");

const rollService = {};

rollService.addNewRollByIdAndBannerItemID = (userId, bannerItemId) =>
  prisma.roll.create({
    data: {
      userId,
      bannerItemId,
    },
  });

rollService.getRollById = (userId) =>
  prisma.roll.findMany({
    where: {
      userId,
    },
    include: {
      bannerItem: {
        include: {
          character: true,
          weapon: true,
        },
      },
    },
  });

rollService.getCharRollByIdAndCharId = (userId, charId) =>
  prisma.roll.findMany({
    where: {
      userId,
      bannerItem: {
        charId,
      },
    },
    include: {
      bannerItem: true,
    },
  });

rollService.deleteRollById = (userId) =>
  prisma.roll.deleteMany({
    where: {
      userId,
    },
  });

module.exports = rollService;
