const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "inti_0786",
    content: "I love coding.",
  },
  {
    username: "engnar_ybs",
    content: "Hard work is important to achieve success",
  },
  {
    username: "intiyaj_raj",
    content: "I got selected for my 1st internship",
  },
];

app.get("/", (req, res) => {
  res.send("Server working well!");
});

app.get("/posts", (req, res) => {
  console.log(posts);
  res.render("index.ejs", { posts });
});

app.listen(3000, (req, res) => {
  console.log("linstening to port : 3000");
});
