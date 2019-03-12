const { db } = require("../index.js");

const getAllMovies = (req, res, next) => {
  db.any("SELECT * FROM movies")
    .then(movies => {
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
  .then(movie => {
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

const getAllMoviesOfOneGenre = (req, res, next) => {
  let genreId = parseInt(req.params.id);
  db.any('SELECT * FROM movies WHERE genre_id=$1', [genreId])
    .then(movies => {
      res.status(200).json({
        status: "success!",
        movies: movies,
        message: "got all movies for one genre!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

module.exports = {
  getAllMovies,
  getSingleMovie,
  getAllMoviesOfOneGenre
};
