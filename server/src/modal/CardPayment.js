const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const cardpayShema = new Schema({
  amount: {
    type: String,
    required: true,
  },
  cardno: {
    type: String,
    required: true,
  },
  expire: {
    type: String,
    required: true,
  },
  cvc: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const CardPayment = mongoose.model("CardPayment", cardpayShema);

module.exports = CardPayment;
