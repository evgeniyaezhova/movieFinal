const { db } = require("../index.js");

const getAllCommentsForOneMovie = (req, res, next) => {
  let movieId = parseInt(req.params.id);
  db.any('SELECT * FROM comments WHERE movie_id=$1', [movieId])
    .then(comments => {
      res.status(200).json({
        status: "success!",
        comments: comments,
        message: "got all comments for one movie!"
      });
    })
    .catch(err => {
      return next(err)
    });
};

module.exports = {
  getAllCommentsForOneMovie
}
