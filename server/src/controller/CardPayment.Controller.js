const CardPayment = require("../modal/CardPayment");

//Add New Payment
const addPayment = async (req, res) => {
  if (req.body) {
    await CardPayment(req.body)
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

module.exports = {
  addPayment,
};
