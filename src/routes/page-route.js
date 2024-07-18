const express = require("express");
const pageController = require("../controllers/page-controller");
const authenticate = require("../middlewares/authenticate");

const pageRouter = express.Router();

pageRouter.get("/banner", pageController.getBanner);
pageRouter.get("/chartcourse/:bannerId", pageController.getChartCourse);
pageRouter.post("/selectcourse", authenticate, pageController.setCourse);
pageRouter.get("/history", authenticate, pageController.getRollHistory);
pageRouter.delete("/history", authenticate, pageController.deleteRollHistory);

module.exports = pageRouter;
