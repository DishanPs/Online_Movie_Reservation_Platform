const router = require("express").Router();
const mobilepayController = require("../controller/MobilePayment.Controller");

module.exports = function () {
  router.post("/add", mobilepayController.addPayment);

  return router;
};
