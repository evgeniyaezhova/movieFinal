const { db } = require("../index.js");

const getAllRatingsForOneMovie = (req, res, next) => {
  let movieId = parseInt(req.params.id);
  db.any('SELECT stars FROM ratings WHERE movie_id=$1', [movieId])
    .then(ratings => {
      res.status(200).json({
        status: "success!",
        ratings: ratings,
        message: "got all ratings for one movie!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

module.exports = {
  getAllRatingsForOneMovie
}
