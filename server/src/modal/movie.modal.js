const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    movieName: { type: String, required: true },
    year: { type:String, required: true},
    category: { type: String, required: true},
    language: {type:String, required:true},
    director: {type:String, required:true},
    theater1: {type:String, required:true},
    time1: {type:String, required:true},
    theater2: {type:String, required:true},
    time2: {type:String, required:true},
    rating: {type:String, required:true},
    link: {type:String, required:true},
    cast: {type:String, required:true},
    //imageURL: { type: String, required: true},
    
});

const Movie = mongoose.model('movie', MovieSchema);
module.exports = Movie;