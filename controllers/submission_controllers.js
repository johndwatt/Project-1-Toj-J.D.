const express = require("express");
const router = express.Router();

const { Submission } = require("../models");


// new route - presentational

router.get("/new", (req, res) => {
    const context = {};
    return res.render("submissions/new");
  });
  
//  create route - functional

router.post("/", async (req,res, next) => {
    try {
    const createdSubmissions = await Submission.create(req.body);
    return res.redirect(`/submissions/${createdSubmissions.id}`);
    } catch (error) {
    const context = {
        error,
        };
        return res.render("submissions", context);
    } 
});

// show route 

router.get("/:id", async (req, res, next) => {
    try {
        const foundSubmission = await Submission.findById(req.params.id);
        const context = {
            submission: foundSubmission,
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
        },
    )
        const context = {
            submission: updatedSubmission,
        };
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
      }
});
module.exports = router;