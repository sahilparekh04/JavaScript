function sayGoodbye() {
  console.log("Goodbye!");
}

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

greet("Sahil", sayGoodbye);
