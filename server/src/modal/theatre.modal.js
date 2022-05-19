const mongoose = require("mongoose");

const Schema = mongoose.Schema
const TheatreSchema = new Schema({
    theatreName: { type: String, required: true },
    boxPrice: { type: String, required: true},
    fullPrice: { type: String, required: true},
    halfPrice: { type: String, required: true},
    type1: { type: String, required:true},
    type2: { type: String, required:true},
    type3: { type: String, required:true},

});

const Theatre = mongoose.model('theatre', TheatreSchema);
module.exports = Theatre;