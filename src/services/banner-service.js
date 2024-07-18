const { RARITY } = require("../constants");
const prisma = require("../models/prisma");

const bannerService = {};

bannerService.findBannerByBannerId = (id) =>
  prisma.banner.findFirst({
    where: {
      id,
    },
  });

bannerService.findBannerItemsByRarityAndBannerId = (rarity, bannerId) =>
  prisma.bannerItem.findMany({
    where: {
      bannerId,
      OR: [{ character: { rarity } }, { weapon: { rarity } }],
    },
    include: {
      character: true,
      weapon: true,
    },
  });

bannerService.getBannerInfo = () => prisma.banner.findMany();

bannerService.getWeaponChartCourse = (bannerId) =>
  prisma.bannerItem.findMany({
    where: {
      bannerId,
      rateUp: true,
      weapon: { rarity: RARITY.SSR },
    },
    include: {
      weapon: true,
    },
  });

bannerService.findWeaponByWeaponId = (id) =>
  prisma.weapon.findFirst({
    where: {
      id,
    },
  });

module.exports = bannerService;
