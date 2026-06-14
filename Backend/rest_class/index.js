const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "inti_0786",
    content: "I love coding.",
  },
  {
    id: uuidv4(),
    username: "engnar_ybs",
    content: "Hard work is important to achieve success",
  },
  {
    id: uuidv4(),
    username: "intiyaj_raj",
    content: "I got selected for my 1st internship",
  },
];

app.get("/", (req, res) => {
  res.send("Server working well!");
});
// get data
app.get("/posts", (req, res) => {
  // console.log(posts);
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});
// post data
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

// create id for post

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  // console.log(id);
  let post = posts.find((p) => p.id === id);
  res.render("show.ejs", { post });
});

// edit post
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => p.id === id);
  post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("edit.ejs", { post });
});

// DELETE METHOD
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => p.id !== id);
  res.redirect("/posts");
});

app.listen(3000, (req, res) => {
  console.log("linstening to port : 3000");
});
