const { db } = require("../index.js");

const getAllGenres = (req, res, next) => {
  db.any("SELECT * FROM genres")
    .then(genres => {
      res.status(200).json({
        status: "success!",
        genres: genres,
        message: "got all movies!"
      });
    })
    .catch(err => {
      return next(err)
    });
};


module.exports = {
  getAllGenres
}
