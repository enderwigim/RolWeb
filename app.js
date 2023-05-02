// Required Modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Set up Express
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Routes
app.get("/", function(req, res) {
    res.render("home");
});


// App List
app.listen(3000, function() {
    console.log("Server started on port 3000");
});