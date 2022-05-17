const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const config = require("./src/config/config");

const app = express();
const otpverify = require("twilio")(config.accountSID, config.authToken);

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
//  app.use(express.json());

config.connectDB();

app.get("/", (req, res) => {
  res.send("Hello Node!");
});

// const mobilepayAPI = require("./src/api/MobilePayment.api");
// app.use("/mobilepayment", mobilepayAPI());

app.get("/mobilepayment", (req, res) => {
  otpverify.verify
    .services(config.serviceID)
    .verifications.create({
      to: `+${req.query.mobile}`,
      channel: req.query.channel,
    })
    .then((data) => {
      res.status(200).send();
    });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
