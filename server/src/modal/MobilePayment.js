const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mobilepayShema = new Schema({
  amount: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const MobilePayment = mongoose.model("MobilePayment", mobilepayShema);

module.exports = MobilePayment;
