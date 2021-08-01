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

//create
router.post("/", function(req, res) {
    res.send({
        message: "create route works",
        body: req.body,
    });
});

//show
router.get("/:id", function (req, res) {
    res.send(`show route works with id: ${req.params.id}`);
});

//edit
router.get("/:id/edit", function (req, res) {
    res.send(`edit route works with id: ${req.params.id}`);
});

module.exports = router;