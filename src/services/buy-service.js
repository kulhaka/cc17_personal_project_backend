const prisma = require("../models/prisma");

const buyService = {};

buyService.checkGemById = (userId) =>
  prisma.userInfo.findUnique({
    where: {
      userId,
    },
    select: {
      gem: true,
    },
  });

buyService.checkStarglitterById = (userId) =>
  prisma.userInfo.findUnique({
    where: {
      userId,
    },
    select: {
      starglitter: true,
    },
  });

buyService.checkStardustById = (userId) =>
  prisma.userInfo.findUnique({
    where: {
      userId,
    },
    select: {
      stardust: true,
    },
  });

buyService.addGemByIdAndAmount = (userId, amount) =>
  prisma.userInfo.update({
    where: {
      userId,
    },
    data: {
      gem: {
        increment: amount,
      },
    },
  });

buyService.addSpentCashAmountByIdAndAmount = (userId, amount) =>
  prisma.userInfo.update({
    data: {
      spentCash: {
        increment: amount,
      },
    },
    where: {
      userId,
    },
  });

buyService.deductGemByIdAndAmount = (userId, amount) =>
  prisma.userInfo.update({
    data: {
      gem: {
        decrement: amount,
      },
    },
    where: {
      userId,
    },
  });

buyService.deductStarglitterByIdAndAmount = (userId, amount) =>
  prisma.userInfo.update({
    data: {
      starglitter: {
        decrement: amount,
      },
    },
    where: {
      userId,
    },
  });

buyService.deductStardustByIdAndAmount = (userId, amount) =>
  prisma.userInfo.update({
    data: {
      stardust: {
        decrement: amount,
      },
    },
    where: {
      userId,
    },
  });

buyService.addSpentGemAmountByIdAndAmount = (userId, amount) =>
  prisma.userInfo.update({
    data: {
      spentPrimogem: {
        increment: amount,
      },
    },
    where: {
      userId,
    },
  });

buyService.buyIntertwinedFateByIdAndAmount = (userId, amount) =>
  prisma.userInfo.update({
    data: {
      intertwinedFate: { increment: amount },
    },
    where: {
      userId,
    },
  });

buyService.buyAcquaintFateByIdAndAmount = (userId, amount) =>
  prisma.userInfo.update({
    data: {
      acquaintFate: { increment: amount },
    },
    where: {
      userId,
    },
  });

module.exports = buyService;
