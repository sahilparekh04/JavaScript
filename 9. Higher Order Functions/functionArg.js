function greet(func, counter) {
  for (let index = 1; index <= counter; index++) {
    func();
  }
}
let greets = function () {
  console.log("Hello");
};
greet(greets, 2);
