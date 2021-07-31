// === External Modules ===
const express = require("express");

const methodOverride = require("method-override");




// === Internal Modules ===


// === Instanced Modules ===
const app = express();

// === Configuration===
const PORT = 4000;

/* SECTION App Config */
app.set("view engine", "ejs");

// === Middleware ===

app.use(express.static("public"));

// NOTE allow body data for all routes
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

// === Routes ===

// 404
app.get("/*", (req,res) => {
    const context = {
        error: req.error,
    };
    res.send("404 works");
    // res.render("404", context);
});


// === Bind Server ===
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});