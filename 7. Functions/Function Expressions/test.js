let hello = function () {
  console.log("Hello");
};
hello(); // we not return value so we can use loke this

let test = function () {
  return "Hello user";
};
test(); // we return value so we can not use like that to print retun value
console.log(test());

// WE can use function expression like varible we can change them

test = function () {
  console.log("Hello User");
  return "hello Sahil";
};
test(); // function retun value not print bcz we never print
console.log(test()); // now we can print return value bcz we actually print that value;

// we can also write function name thats not problem bcz functionality store in variable and we call them using variable.
let sahil = function wwe() {
  console.log("hello vivek");
};

sahil();
