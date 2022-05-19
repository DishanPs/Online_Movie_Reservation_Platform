const Theatre = require("../modal/theatre.modal");
const mongoose = require('mongoose');

const getAllTheatres = async (req, res) => {
    await Theatre.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

const getTheatre = async (req, res) => {
    if (req.params.id){
        console.log(req.params.id)
        await Theatre.findById(req.params.id)
        .then((data) => {
            res.status(200).send({ data });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
        }
}

module.exports = {
    getAllTheatres,
    getTheatre
}