const express = require("express");
const router = express.Router();

const { Submission } = require("../models");


// new

router.get("/new", (req, res) => {
    res.send("submission/new")
    // const context = {};
    // return res.render("submissions/new", context);
  });
  
// //  create
// router.get("/", async (req,res, next) => {
//     try {
//     const allSubmissions = await Submission.find({});
//     const context = {
//         submission: allSubmissions,
//         };
//         return res.render("submissions/index", context);
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });


module.exports = router;