function sayGoodbye() {
  console.log("Goodbye!");
}

function greet(name) {
  return new Promise((res, rej) => {
    console.log("Hello, " + name);
    res();
  });
}

greet("Sahil", sayGoodbye);
