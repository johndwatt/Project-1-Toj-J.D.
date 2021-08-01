const express = require("express");
const router = express.Router();

const { User } = require("../models");

//index - login
router.get("/login", (req, res) => {
    res.send("login route works");
});

router.get("/signup", (req, res) => {
    res.send("signup route works");
});

router.post("/login", (req, res) => {
    res.send("login post route works");
});

router.post("/signup", (req, res) => {
    res.send("signup post route works");
});

router.get("/logout", (req, res) => {
    res.send("logout route works");
});

module.exports = router;