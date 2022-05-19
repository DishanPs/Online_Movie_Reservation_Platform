const Cart = require("../modal/cart.modal");


const addCart = async (req, res) => {
    if (req.body) {
        const cart = new Cart(req.body);
        await cart.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}

const getCart = async (req, res) => {
    if (req.params.id){
        console.log(req.params.id)
        await Cart.findById(req.params.id)
        .then((data) => {
            res.status(200).send({ data });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
        }
}


const getAllCarts = async (req, res) => {
    await Cart.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

const updateCart = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await Cart.findByIdAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(err);
            });
    }
}

const deleteCart = async (req, res) => {
    await Cart.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).send({ status: "Deleted" });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };


module.exports = {
    addCart,
    getCart,
    getAllCarts,
    updateCart,
    deleteCart,
    
}