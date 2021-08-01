const express = require("express");
const router = express.Router();

const { Assignment } = require("../models");

//index
router.get("/", function (req, res) {
    res.send("index route works");
});

//new
router.get("/new", function (req, res) {
    res.send("new route works");
});

module.exports = router;