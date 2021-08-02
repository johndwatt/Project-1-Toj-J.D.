const express = require("express");
const router = express.Router();

const { Assignment } = require("../models");

//index
router.get("/", (req, res) => {
    return res.render("assignments/index");
});

//new
router.get("/new", (req, res) => {
    return res.render("assignments/new");
});

//create
router.post("/", (req, res) => {
    res.send({
        message: "create route works",
        body: req.body,
    });
});

//show
router.get("/:id", (req, res) => {
    res.send(`show route works with id: ${req.params.id}`);
});

//edit
router.get("/:id/edit", (req, res) => {
    res.send(`edit route works with id: ${req.params.id}`);
    //return res.render("assignments/edit");
});

//update
router.put("/:id", (req, res) => {
    res.send({
        message: "update route works",
        body: req.body,
        id: req.params.id,
    });
});

//destroy
router.delete("/:id", (req, res) => {
    res.send({
        message: "delete route works",
        id: req.params.id,
    });
});

module.exports = router;