/**
 * Module dependencies.
 */

const express = require("express"),
  http = require("http"),
  path = require("path"),
  errorhandler = require("errorhandler");

const app = express();

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// development only
if ("development" === app.get("env")) {
  app.use(errorhandler());
}

app.get("/", (req, res) => res.render("index", { title: "Express" }));

http
  .createServer(app)
  .listen(app.get("port"), () =>
    console.log("Express server listening on port " + app.get("port"))
  );
