const prisma = require("../models/prisma");

const userService = {};

userService.createUser = (data) => prisma.user.create({ data });

userService.findUserByUsername = (username) =>
  prisma.user.findFirst({
    where: {
      username,
    },
  });

userService.findUserByEmail = (email) =>
  prisma.user.findFirst({
    where: {
      email,
    },
  });

userService.findUserById = (id) =>
  prisma.user.findFirst({
    where: {
      id,
    },
  });

userService.updateEmailByIdAndEmail = (id, email) =>
  prisma.user.update({
    data: {
      email,
    },
    where: {
      id,
    },
  });

userService.updatePasswordByIdAndPassword = (id, password) =>
  prisma.user.update({
    data: {
      password,
    },
    where: {
      id,
    },
  });

module.exports = userService;
