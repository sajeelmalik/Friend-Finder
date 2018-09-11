//Sajeel Malik
//Friend Finder Full-Stack Application


//server.js only contains the essential server logic initialized from express.js. To establish a more modular application, the API routes and HTMl routes have been served under the "app" directory under "routing," rather than here
//09/10/18

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); //path is not expressly utilized in server.js any more, since the HTML routes have been modularized

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ================================================================================
// ROUTING
// imports the information generated in the API and HTML routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENING
// The code below effectively starts the server

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  