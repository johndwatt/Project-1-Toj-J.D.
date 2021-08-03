const express = require("express");
const router = express.Router();

const { Assignment, Submission } = require("../models");


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
        const allSubmissions = await Submission.find({ assignmentId: req.params.id });
        const context = {
            assignment: foundAssignment,
            submissions: allSubmissions,
        }
        return res.render("assignments/show", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

//edit
router.get("/:id/edit", async (req, res) => {
    try {
        const foundAssignment = await Assignment.findById(req.params.id);
        const context = {
            assignment: foundAssignment,
        };
        return res.render("assignments/edit", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

//update
router.put("/:id", async (req, res, next) => {
    try {
        const updatedAssignment = await Assignment.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        return res.redirect(`/assignments/${updatedAssignment.id}`)
    } catch (error) {
        console.log(error); 
        req.error = error;
        return next();
    }
});

//destroy
router.delete("/:id", async (req, res) => {
    try {
        await Assignment.findByIdAndDelete(req.params.id);
        return res.redirect("/assignments");
    } catch (error) {
        console.log(error); 
        req.error = error;
        return next();
    }
});

module.exports = router;