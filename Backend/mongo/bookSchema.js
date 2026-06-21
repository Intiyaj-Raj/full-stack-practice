const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection successful ");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/bookData");
}
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

const book1 = new Book({
  title: "Mathematics XII",
  author: "R. D. Sharma",
  price: 245,
});

const book2 = new Book({
  title: "Physics Fundamentals",
  author: "H. C. Verma",
  price: 350,
});

const book3 = new Book({
  title: "Chemistry Concepts",
  author: "O. P. Tandon",
  price: 320,
});

const book4 = new Book({
  title: "Biology Basics",
  author: "Trueman",
  price: 280,
});

const book5 = new Book({
  title: "English Grammar",
  author: "Wren & Martin",
  price: 400,
});

const book6 = new Book({
  title: "Computer Science",
  author: "Sumita Arora",
  price: 450,
});

const book7 = new Book({
  title: "Data Structures",
  author: "Seymour Lipschutz",
  price: 500,
});

const book8 = new Book({
  title: "JavaScript Guide",
  author: "David Flanagan",
  price: 650,
});

const book9 = new Book({
  title: "MongoDB Basics",
  author: "Kristina Chodorow",
  price: 550,
});

const book10 = new Book({
  title: "Web Development",
  author: "Jon Duckett",
  price: 700,
});

// Save all books
book1.save();
book2.save();
book3.save();
book4.save();
book5.save();
book6.save();
book7.save();
book8.save();
book9.save();
book10.save();

// console.log(bookSchema);
