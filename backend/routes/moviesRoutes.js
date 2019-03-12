const express = require("express");
const router = express.Router();

const { getAllPMovies, getSingleMovie, getAllMoviesOfOneGenre} = require("../db/queries/moviesQueries");

router.get("/", getAllPins);
router.get("/:id", getSinglePin);
router.get("/users/:id", getAllPinsForOneUser);
router.delete("/:id", deleteSinglePin);

module.exports = router;
