const express = require("express");
const router = express.Router();

const { Submission, Assignment } = require("../models");
const handleUploadFile = require('../utils/handleUploadFile');


// new route - presentational

router.get("/new", async (req, res) => {
    try {
        const allAssignments = await Assignment.find({});
        const context = {
            assignments: allAssignments,
        };
        return res.render("submissions/new", context);   
    } catch (error){
        const context = {
            error,
        };
        return res.render("submissions/new", context);
    }

  });
  
//  create route - functional

router.post("/", handleUploadFile, async (req,res, next) => {
    try {
        const createdSubmissions = await Submission.create(req.body);
        return res.redirect(`/submissions/${createdSubmissions._id}`);
    } catch (error) {
        const allAssignments = await Assignment.find({});
        const context = {
            error, 
            assignments: allAssignments,
        };
        return res.render("submissions/new", context);
    } 
});

// show route 

router.get("/:id", async (req, res, next) => {
    try {
        const foundSubmission = await Submission.findById(req.params.id);
        const foundAssignment = await Assignment.findById( foundSubmission.assignmentId);
        const context = {
            submission: foundSubmission,
            assignment: foundAssignment,
        };
        return res.render("submissions/show", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
      }
});

// edit route

router.get("/:id/edit", async (req, res, next) => {
    try {
        const foundItem = await Submission.findById(req.params.id);
        const context = {
            submission: foundItem,
        };
        return res.render("submissions/edit", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
      } 
});

// update route

router.put("/:id", async (req, res, next) => {
    try {
        const updatedSubmission = await Submission.findByIdAndUpdate(req.params.id, 
        {
            $set: req.body,
        },
        {
            new: true,
        });

        return res.redirect(`/submissions/${updatedSubmission.id}`);
    }   catch (error) {
        console.log(error);
        req.error = error;
        return next();
      }
});

// destroy
router.delete("/:id", async (req, res) => {
    try {
        await Submission.findByIdAndDelete(req.params.id);
        return res.redirect("/assignments");
    } catch (error) {
        console.log(error); 
        req.error = error;
        return next();
    }
});


module.exports = router;