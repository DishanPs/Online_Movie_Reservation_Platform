const express = require('express');
const router = express.Router();
const TheatreController = require('../controller/theatre.controller');

module.exports = function (){
    router.get('/:id', TheatreController.getTheatre);
    router.get('/', TheatreController.getAllTheatres);
    return router;
}