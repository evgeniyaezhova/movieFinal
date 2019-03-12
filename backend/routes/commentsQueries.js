const express = require("express");
const router = express.Router();

const { getAllCommentsForOneMovie } = require("../db/queries/commentsQueries");

router.get("/movie/:id", getAllRatingsForOneMovie);

module.exports = router;
