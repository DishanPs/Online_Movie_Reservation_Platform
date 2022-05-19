const express = require('express');
const router = express.Router();
const CartController = require('../controller/cart.controller');

module.exports = function (){
    router.post('/add', CartController.addCart);
    router.get('/:id', CartController.getCart);
    router.put('/update/:id', CartController.updateCart);
    router.delete('/delete/:id', CartController.deleteCart);
    router.get('/', CartController.getAllCarts);
    return router;
}