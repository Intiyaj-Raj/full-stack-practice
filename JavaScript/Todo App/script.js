let todo = [];
let req = prompt("Please enter your request ");

while (true) {
  if (req == "quit") {
    console.log("Quitting App");
    break;
  }

  if (req == "list") {
    console.log("_______________");
    for (task of todo) {
      console.log(task);
    }
    console.log("_______________");
  } else if (req == "add") {
    let task = prompt("please enter your task you want to add");

    todo.push(task);
    console.log("task added");
  } else if (req == "delete") {
    let idx = prompt("please enter the task index.");
    todo.slice(idx, 1);
    console.log("task deleted");
  } else {
    console.log("wrong request");
  }
  req = prompt("Please enter your request ");
}
