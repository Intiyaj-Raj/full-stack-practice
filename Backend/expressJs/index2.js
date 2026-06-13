const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    name: "Intiyaj",
    year: "2026",
    branch: "B.Tech",
    profession: "MERN Stack Intern",
  });
});

app.get("/apple", (req, res) => {
  res.send({
    name: "Apple",
    model: "2026",
    color: "red",
  });
});

app.get("/samsung", (req, res) => {
  res.send({
    name: "samsung",
    model: "2025",
    color: "silver",
  });
});

/**
 * ================================
 *          multiple parameter
 ================================
 */

// app.get("/:username/:id", (req, res) => {
//   let { username, id } = req.params;
//   res.send("Welcome to the page of @" + username);
// });

/* 
===============================================
    send html code
===============================================
*/
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;

  res.send(`<h1> Welcome to the page of @${username}</h1>`);
});

/* 
===============================================
    send query string
===============================================
*/

app.get("/search", (req, res) => {
  let { q } = req.query;
  res.send(`search result for query ${q}`);
});

// test like this url
//localhost:3000/search?q=apple

/* 
===============================================
  post method
===============================================
*/
app.post("/", (req, res) => {
  res.send("You sent a post request to root.");
});

app.post("/*path", (req, res) => {
  res.send("This is not found.");
});
http: app.listen(3000, () => {
  console.log("server is running on port 3000");
});
