const express = require("express");
const router = express.Router();

const { Assignment } = require("../models");

//index
router.get("/", function (req, res) {
    res.send("index route works");
});

module.exports = router;