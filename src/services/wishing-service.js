const { RARITY, BANNER_TYPE } = require("../constants");

const wishingService = {};

wishingService.wishRarity = (bannerType, pity, srPity) => {
  let guaranteePity, softPity, srRate, ssrRate;

  if (
    bannerType === BANNER_TYPE.CHARACTER ||
    bannerType === BANNER_TYPE.STANDARD
  ) {
    guaranteePity = 89;
    softPity = 74;
    srRate = 5.1;
    ssrRate = 0.6;
  }
  if (bannerType === BANNER_TYPE.WEAPON) {
    guaranteePity = 79;
    softPity = 64;
    srRate = 6;
    ssrRate = 0.6;
  }

  let roll = Math.random() * 100;

  if (pity < softPity) {
    if (roll <= ssrRate) return RARITY.SSR;
    if (roll >= 100 - srRate) return RARITY.SR;
    else if (srPity >= 9) return RARITY.SR;
    else return RARITY.R;
  }
  if (pity >= softPity) {
    if (
      roll <=
      ssrRate +
        ((pity - softPity + 1) * (100 - ssrRate)) /
          (guaranteePity - softPity + 1)
    )
      return RARITY.SSR;
    if (roll >= 100 - srRate) return RARITY.SR;
    else if (srPity >= 9) return RARITY.SR;
    else return RARITY.R;
  }
};

wishingService.wishUnit = (
  bannerType,
  unitArr,
  guarantee,
  chartcourse,
  selectedWeaponId
) => {
  let rateUpRate;
  if (bannerType === BANNER_TYPE.WEAPON) {
    rateUpRate = 75;
  } else {
    rateUpRate = 50;
  }

  const rateUpItem = unitArr.filter((item) => item.rateUp === true);
  const nonRateUpItem = unitArr.filter((item) => item.rateUp === false);

  let resArr = [];
  let roll = Math.random() * 100;
  if (chartcourse >= 2) {
    const chartCourseItem = rateUpItem.filter(
      (item) => item.weaponId === selectedWeaponId
    );
    resArr.push(...chartCourseItem, true);
  } else {
    if (guarantee === true || roll <= rateUpRate) {
      if (rateUpItem.length > 0) {
        resArr.push(
          rateUpItem[Math.floor(Math.random() * rateUpItem.length)],
          true
        );
      } else {
        resArr.push(
          nonRateUpItem[Math.floor(Math.random() * nonRateUpItem.length)],
          false
        );
      }
    } else {
      resArr.push(
        nonRateUpItem[Math.floor(Math.random() * nonRateUpItem.length)],
        false
      );
    }
  }
  return resArr;
};

module.exports = wishingService;
