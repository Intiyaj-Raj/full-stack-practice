const mongoose = require("mongoose");
const Products = require("../models/store.js");
const initData = require("./data.js");
main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/storeData");
}
const initDB = async () => {
  await Products.deleteMany({});
  await Products.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
