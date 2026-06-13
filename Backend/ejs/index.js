const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// home ejs file
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// rolldice  ejs file
app.get("/roll", (req, res) => {
  res.render("rolldice.ejs");
});

// instagram.ejs file
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  res.render("instagram.ejs", { username });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
