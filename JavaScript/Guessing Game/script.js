const max = prompt("Enter the max  number");

console.log(max);

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
  if (guess == "quit") {
    document.writeln("user quit");
    break;
  }
  if (guess == random) {
    document.writeln("you are right! congrats!!");
    break;
  } else if (guess < random) {
    guess = prompt("your guess was too small. please try again.");
  } else {
    guess = prompt("your guess was too large. please try again.");
  }
}
