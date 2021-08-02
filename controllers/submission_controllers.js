const express = require("express");
const router = express.Router();

const { Submission } = require("../models");


// new route - presentational

router.get("/new", (req, res) => {
    const context = {};
    return res.render("submissions/new", context);
  });
  
//  create route - functional
router.get("/", async (req,res, next) => {
    try {
    const createdSubmissions = await Submission.create(req.body);
    return res.redirect(`/submissions/${createdSubmissions.id}`);
    } catch (error) {
    const context = {
        error,
        };
        return res.render("submissions/new", context);
    } 
});


module.exports = router;