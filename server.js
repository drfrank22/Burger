const express = require("express");

// set up app
var app = express();
var PORT = process.env.PORT || 8080;

// parse app body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
var routes = require("./controllers/burgers_controllers");

app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });