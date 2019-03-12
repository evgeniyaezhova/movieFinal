const express = require("express");
const router = express.Router();

const { getAllRatingsForOneMovie } = require("../db/queries/ratingssQueries");

router.get("/movie/:id", getAllRatingsForOneMovie);

module.exports = router;
