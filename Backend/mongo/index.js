const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/userData");
}

// creating schema

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

// use schema to set data
// insertion data
const User = new mongoose.model("User", userSchema);

// const user1 = new User({
//   name: "intiyaj",
//   age: 21,
//   email: "intiyajraj786@gmail.com",
// });

// user1.save();

// const user2 = new User({
//   name: "john",
//   email: "john12@gmail.com",
//   age: "24",
// });

// user2.save();
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// find user

// User.find({ age: 24 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find user condition wise

// User.find({ age: { $gt: 20 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find one user at a time

// User.findOne({ age: 21 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Update One

// User.updateOne({ name: "john" }, { age: 34 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "john" }, { age: 45 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "john" }, { age: 55 }, { name: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// delete data

// User.deleteOne({ name: "john" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
