var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = process.env.PORT || 8080;

var profiles = require("./app/data/friends.js");

require("./app/routing/htmlRoutes.js")(app, path);
require("./app/routing/apiRoutes.js")(app, profiles);

app.listen(PORT, function() {
	console.log("listening on port: " +PORT);
});