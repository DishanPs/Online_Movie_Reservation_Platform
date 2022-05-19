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

const reservationApi = require("./src/api/reserve.api");
app.use("/reservation", reservationApi());

const movieApi = require("./src/api/movie.api");
app.use("/movie", movieApi());

const mobilepayAPI = require("./src/api/MobilePayment.api");
app.use("/mobilepayment", mobilepayAPI());

const cardpayAPI = require("./src/api/CardPayment.api");
app.use("/cardpayment", cardpayAPI());

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

const customerApi = require("./src/api/customer.api");
app.use("/customer", customerApi());

const loginApi = require("./src/api/login.api");
app.use("/login", loginApi());
