const { db } = require("../index.js");

const getAllMovies = (req, res, next) => {
  db.any("SELECT * FROM movies")
    .then(pins => {
      res.status(200).json({
        status: "success!",
        movies: movies,
        message: "got all movies!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

const getSingleMovie = (req, res, next) => {
  let movieId = parseInt(req.params.id);
  db.one('SELECT * FROM movies WHERE id=$1', [movieId])
  .then(pin => {
    res.status(200)
    .json({
      status: "success",
      movie: movie,
      message: "got one movie with all the info"
    });
  })
  .catch(err => {
    return next(err)
  })
};
