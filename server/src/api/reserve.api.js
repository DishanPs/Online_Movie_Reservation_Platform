const express = require('express');
const router = express.Router();
const ReserveController = require('../controller/reserve.controller');

module.exports = function (){
    router.get('/:name', ReserveController.getReservation);
    router.post('/add', ReserveController.addReservation);
    router.put('/update/:id', ReserveController.updateReservation);
    router.delete('/delete/:id', ReserveController.deleteReservation);
    router.get('/', ReserveController.getAllReservations);
    return router;
}