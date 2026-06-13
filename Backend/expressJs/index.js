const express = require("express");
const app = express();

app.get("/register", (req, res) => {
  res.send("standard GET response");
});

app.post("/register", (req, res) => {
  res.send("starndard POST response");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
