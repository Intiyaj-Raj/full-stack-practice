const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// home ejs file
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// rolldice  ejs file
app.get("/roll", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal });
});

// instagram.ejs file
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  res.render("instagram.ejs", { username });
});

// linkedin.ejs
app.get("/linkedin/:username", (req, res) => {
  let follwers = ["john", "alia", "bob", "marsh", "kane", "michel"];
  let { username } = req.params;
  res.render("linkedin.ejs", { username, follwers });
});

// instagram page with json data

app.get("/instagram/:username", (req, res) => {
  let { username } = req.params;
  const data = require("./instaData.json");
  let instaData = data[username];
  if (instaData) {
    console.log(instaData);
    res.render("instagramData.ejs", { instaData });
  } else {
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
