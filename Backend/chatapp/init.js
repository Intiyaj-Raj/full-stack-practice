const mongoose = require("mongoose");

const Chat = require("./models/chat");
main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/userData");
}

let allChats = [
  {
    from: "Neha",
    to: "Priya",
    msg: "Send me your exam sheets.",
    created_at: new Date(),
  },
  {
    from: "Priya",
    to: "Neha",
    msg: "Sure, I'll send them in a minute.",
    created_at: new Date(),
  },
  {
    from: "Rahul",
    to: "Amit",
    msg: "Are you coming to college today?",
    created_at: new Date(),
  },
  {
    from: "Amit",
    to: "Rahul",
    msg: "Yes, I'll be there by 10 AM.",
    created_at: new Date(),
  },
  {
    from: "Riya",
    to: "Sneha",
    msg: "Can you share the project files?",
    created_at: new Date(),
  },
  {
    from: "Sneha",
    to: "Riya",
    msg: "I have uploaded them to Google Drive.",
    created_at: new Date(),
  },
  {
    from: "Karan",
    to: "Vikas",
    msg: "Let's meet in the library.",
    created_at: new Date(),
  },
  {
    from: "Vikas",
    to: "Karan",
    msg: "Okay, I'll reach in 15 minutes.",
    created_at: new Date(),
  },
  {
    from: "Anjali",
    to: "Pooja",
    msg: "Happy Birthday! Have a wonderful day!",
    created_at: new Date(),
  },
  {
    from: "Pooja",
    to: "Anjali",
    msg: "Thank you so much! 😊",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
