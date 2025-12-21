// Question 1
// Create a program that generates a random number representing a dice roll.
// The number should be between 1 and 6.

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// Question 2
// Create an object that represents a car.
// The object should store the following properties:
// name
// model
// color
// Print the car’s name.

const car = {
  name: "Tata",
  model: "Siera",
  color: "yellow",
};

console.log(car.name);

// Question 3
// Create an object called Person with the following properties:
//         name
//         age
//         city
// Change the original value of city to "New York".
// Add a new property called country and set its value to "United States".

const Person = {
  name: "John",
  age: 33,
  city: "New Jersey",
};
//  update value
Person.city = "New York";
// add key and value in the object
Person.country = "United State";

console.log(Person);
