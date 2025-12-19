// Qs1. Create a number variable num with some value.
// Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
let num = 123;

if (num % 10 == 0) {
  console.log("good");
} else {
  console.log("bad");
}

// Qs2. Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting
// their name & age) :
// name is age years old.
// [Use template Literals to print this sentence]

// let name = prompt("Enter your name: ");
// let age = prompt("Enter your Age: ");

// alert(`${name} is ${age} years old`);

// Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4: October, November, December
// [Use the number as the case value in switch]

// let quarter = prompt("Enter Quarter");
let quarter = 2;

switch (quarter) {
  case 1:
    console.log("January, Febnruray, March");
    break;

  case 2:
    console.log("April, May, June");
    break;

  case 3:
    console.log("July, August, September");
    break;

  case 4:
    console.log("October, November, December");
    break;

  default:
    console.log("Please enter a valid quarter");
}

// Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
// length greater than 5.
// For a given string print if it is golden or not.

let goldenString = "apple";
if (
  goldenString.startsWith("A") ||
  (goldenString.startsWith("a") && goldenString.length > 5)
) {
  console.log("Golden");
} else {
  console.log("not golden");
}

// Qs5. Write a program to find the largest of 3 numbers.

let num1 = 2;
let num2 = 3;
let num3 = 4;

if (num1 > num2) {
  if (num1 > num2) {
    console.log(`${num1} is largest`);
  } else {
    console.log(`${num3} is largest`);
  }
} else {
  if (num2 > num1) {
    console.log(`${num2} is largest`);
  } else {
    console.log(`${num3} is largest `);
  }
}

// Qs6. Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2

let n1 = 42;
let n2 = 23432;

if (n1 % 10 == n2 % 10) {
  console.log("numbers have the same  last digit which is ", num1 % 10);
} else {
  console.log("numbers don't jhave the same last digit.");
}
