const mongoose = require("mongoose");

const Schema = mongoose.Schema
const ReservationSchema = new Schema({
    name: { type: String, required: true },
    date: { type: String, required: true},
    time: { type: String, required: true},
    price: { type: String, required: true},
    quantity: { type: String, required:true},
    theatreName: { type: String, required:true}
});

const Reservation = mongoose.model('reservation', ReservationSchema);
module.exports = Reservation;