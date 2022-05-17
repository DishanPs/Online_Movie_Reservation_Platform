const Reservation = require("../modal/reserve.modal");
const mongoose = require('mongoose');

//Make an appointment
const addReservation = async (req, res) => {
    if (req.body) {
        const reservation = new Reservation(req.body);
        await reservation.save()
            .then((data) => {res.status(200).send({data: data});})
            .catch((err) => {res.status(500).send(err);});
    }
};

//get All Appointments
const getAllReservations = async (req, res) => {
    await Reservation.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

//get Appointments for selected user
const getReservation = async (req, res) => {
    if (req.body){
        await Reservation.findOne(req.body)
        .then((data) => {
            res.status(200).send({ data });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
        }
}

const getMovie = async (req, res) => {
    if (req.body){
        await Reservation.findOne(req.body)
        .then((data) => {
            res.status(200).send({ data });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
        }
}

//update Appointments with id
const updateReservation = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await Reservation.findByIdAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(error);
            });
    }
}

//delete Appointments
const deleteReservation = async (req, res) => {
    await Reservation.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).send({ status: "Deleted" });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };

module.exports = {
    addReservation,
    getAllReservations,
    getReservation,
    getMovie,
    updateReservation,
    deleteReservation
}