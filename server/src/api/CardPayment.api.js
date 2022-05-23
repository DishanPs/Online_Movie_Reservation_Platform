const router = require("express").Router();
const cardpayController = require("../controller/CardPayment.Controller");

module.exports = function () {
  router.post("/add", cardpayController.addPayment);

  return router;
};
