const Customer = require("../modal/customer.modal");


const registerCustomer = async (req, res) => {
    if (req.body) {
        const customer = new Customer(req.body);
        await customer.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}

const profileDetails = async (req, res) => {
    if (req.body){
        await Customer.findOne({'email': req.params.email})
        .then((data) => {
            res.status(200).send({ data });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
        }
}


const updateCustomer = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await Customer.findByIdAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(err);
            });
    }
}

const deleteCustomer = async (req, res) => {
    await Customer.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).send({ status: "Deleted" });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };


module.exports = {
    registerCustomer,
    updateCustomer,
    deleteCustomer,
    profileDetails,
    
}