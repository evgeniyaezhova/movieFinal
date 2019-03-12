const express = require("express");
const router = express.Router();

const { getAllMovies, getSingleMovie, getAllMoviesOfOneGenre} = require("../db/queries/moviesQueries");

router.get("/", getAllMovies);
router.get("/:id", getSingleMovie);
router.get("/genre/:id", getAllMoviesOfOneGenre);

module.exports = router;
