const express = require("express");
var path = require("path");
var ejs = require("ejs");
var app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
var path = require("path");
// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, "public")));

var routes = require("./routes");

app.get("/", routes.home);

app.get("/star_wars_episode/:episode_number?", routes.movie_single);

app.get("*", routes.notFound);
app.listen(3000, () => {
  console.log("Express server stated at :3000");
});
