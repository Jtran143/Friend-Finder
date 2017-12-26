var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// npm express
var app = express();
var PORT = process.env.PORT || 3000;

// npm body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes for HMTL requests

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

// server listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});