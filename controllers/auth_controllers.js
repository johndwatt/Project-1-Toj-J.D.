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

module.exports = router;