const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const calculator = (a, b, callback) => {
  let sum = callback(a, b);
  console.log(sum);
};

calculator(10, 20, mul);
