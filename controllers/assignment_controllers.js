const express = require("express");
const router = express.Router();

const { Assignment } = require("../models");


//index
router.get("/", async (req, res, next) => {
    try {
        const allAssignments = await Assignment.find({});
        const context = {
            assignments: allAssignments,
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
router.post("/", async (req, res, next) => {
    try {
        const createdAssignment = await Assignment.create(req.body);
        return res.redirect(`/assignments/${createdAssignment.id}`)
    } catch (error) {
        const context = {
            error,
        };
        return res.render ("assignments/new", context);
    }
});

//show
router.get("/:id", async (req, res) => {
    try {
        const foundAssignment = await Assignment.findById(req.params.id);
        const context = {
            assignment: foundAssignment,
        }
        return res.render("assignments/show", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
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