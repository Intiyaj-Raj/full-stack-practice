const express = require("express");
const app = express();
const storeData = require("./models/store.js");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/storeData");
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// default route
app.get("/", (req, res) => {
  res.send("Welcome to our store😀");
});

// index route
app.get("/store", async (req, res) => {
  const allData = await storeData.find({});
  res.render("index.ejs", { allData });
});

// new route
app.get("/store/new", (req, res) => {
  res.render("new.ejs");
});

// show route
app.get("/store/:id", async (req, res) => {
  const { id } = req.params;
  const data = await storeData.findById(id);
  res.render("show.ejs", { data });
});

// save created data
app.post("/store", async (req, res) => {
  let { title, description, image, price, category, brand, stock } = req.body;
  let newData = new storeData({
    title,
    description,
    image,
    price,
    category,
    brand,
    stock,
  });
  await newData.save();
  res.redirect("/store");
});

// edit route
app.get("/store/:id/edit", async (req, res) => {
  const { id } = req.params;
  const data = await storeData.findById(id);
  res.render("edit.ejs", { data });
});

// save edit data
app.put("/store/:id", async (req, res) => {
  let { id } = req.params;
  await storeData.findByIdAndUpdate(id, { ...req.body });
  res.redirect(`/store/${id}`);
});

// delete route
app.delete("/store/:id", async (req, res) => {
  const { id } = req.params;
  await storeData.findByIdAndDelete(id);
  res.redirect("/store");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
