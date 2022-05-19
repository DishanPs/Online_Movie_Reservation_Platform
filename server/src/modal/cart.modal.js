const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    movieName: { type: String, required: true },
    date: { type:String, required: true},
    time: { type: String, required: true},
    type1: {type:String, required:true},
    type2: {type:String, required:true},
    type3: {type:String, required:true},
    price: {type:String, required:true},
    quantity: {type:String, required:true},
    total: {type:String, required:true},
    totalPrice: {type:String, required:true}    
});

const Cart = mongoose.model('cart', CartSchema);
module.exports = Cart;