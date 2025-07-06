let toDoTask = [];

while (true) {
  let opr = prompt("Enter your Opration:");

  if (opr == "quit") {
    console.log("Quit app");
    break;
  } else if (opr == "add") {
    let task = prompt("Enter your task:");
    toDoTask.push(task);
    console.log("Task Added!");
  } else if (opr == "show") {
    console.log("---Your Tasks---");
    for (const tasks of toDoTask) {
      console.log(tasks);
    }
    console.log("---End of Task---");
  } else if (opr == "delete") {
    let value = prompt("Enter you want to delete:");
    for (const element of toDoTask) {
      if (value == element) {
        let index = toDoTask.indexOf(element);
        toDoTask.splice(index, 1);
        console.log("Task deleted!");
        break;
      }
    }
    console.log(toDoTask);
  } else {
    console.log("Task not exist");
  }
}
