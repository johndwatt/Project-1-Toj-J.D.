const express = require("express");
const router = express.Router();

const { Assignment } = require("../models");


//index
router.get("/", async (req, res, next) => {
    try {
        const allAssignments = await Assignment.find({});
        const context = {
            allAssignments
        };
        return res.render("assignments/index", context);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
});

//new
router.get("/new", (req, res) => {
    const context = {};
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