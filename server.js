// === External Modules ===
const express = require("express");

const methodOverride = require("method-override");




// === Internal Modules ===
const controllers = require("./controllers");

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



// === Bind Server ===
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});