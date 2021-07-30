// === External Modules ===
const express = require("express");

// === Internal Modules ===


// === Instanced Modules ===
const app = express();

// === Configuration===
const PORT = 4000;

// === Middleware ===

// === Routes ===

// === Bind Server ===
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});