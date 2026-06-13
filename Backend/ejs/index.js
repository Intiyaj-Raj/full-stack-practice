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

// instagram ejs file

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
