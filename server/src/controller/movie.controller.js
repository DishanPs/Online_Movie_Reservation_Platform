const Movie = require("../modal/movie.modal");


const addMovie = async (req, res) => {
    if (req.body) {
        const movie = new Movie(req.body);
        await movie.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}

const getMovie = async (req, res) => {
    if (req.params.id){
        await Movie.findById(req.params.id)
        .then((data) => {
            res.status(200).send({ data });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
        }
}


const getAllMovies = async (req, res) => {
    await Movie.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

const updateMovie = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await Movie.findByIdAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(err);
            });
    }
}

const deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).send({ status: "Deleted" });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };


module.exports = {
    addMovie,
    getMovie,
    getAllMovies,
    updateMovie,
    deleteMovie,
    
}