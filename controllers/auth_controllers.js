const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models");

//index - login
router.get("/login", (req, res) => {
    return res.render("auth/login");
});

router.get("/signup", (req, res) => {
    return res.render("auth/signup");
});

router.post("/login", (req, res) => {
    res.send("login post route works");
});

router.post("/signup", async (req, res) => {
    try {
        const foundUser = await User.exists({ email: req.body.email });
        if (foundUser) {
            return res.redirect("/login");
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        const createdUser = await User.create(req.body);
        return res.redirect("/login");
    } catch (error){
        console.log(error);
        return res.send(error);
    }
});

router.get("/logout", (req, res) => {
    res.send("logout route works");
});

module.exports = router;