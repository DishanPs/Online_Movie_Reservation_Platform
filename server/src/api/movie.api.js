const express = require('express');
const router = express.Router();
const MovieController = require('../controller/movie.controller');

module.exports = function (){
    router.post('/add', MovieController.addMovie);
    router.get('/:id', MovieController.getMovie);
    router.put('/update/:id', MovieController.updateMovie);
    router.delete('/delete/:id', MovieController.deleteMovie);
    router.get('/', MovieController.getAllMovies);
    return router;
}