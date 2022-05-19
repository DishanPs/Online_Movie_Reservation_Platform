const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const Vonage = require("@vonage/server-sdk");
const config = require("./src/config/config");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

config.connectDB();


app.get("/", (req, res) => {
  res.send("Hello Node!");
});

const mobilepayAPI = require("./src/api/MobilePayment.api");
app.use("/mobilepayment", mobilepayAPI());

const cardpayAPI = require("./src/api/CardPayment.api");
app.use("/cardpayment", cardpayAPI());

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
