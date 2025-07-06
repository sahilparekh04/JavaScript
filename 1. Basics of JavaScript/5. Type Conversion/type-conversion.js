// Two type of type conversion
// 1. implicit (Done automatically by js compiler)
// 2. explicit (Done manually)

// Explicit Converstion
// 1. Value to Sting
// 2. Value to Number
// 3. Value to Boolean

// ***** 1. Value to String *****
// i. Number to String
// ii. Boolean to String

// Two mathods
// 1. String() 2. variableName.toString()
let num = 25;
console.log(typeof num);
console.log(typeof String(num));

let bool = true;
console.log(typeof bool);
console.log(typeof bool.toString());

// ***** 2. Value to Number *****
// We can also do with parseInt() and parseFloat()
let str = "Hello";
let str2 = "5";
let nullValue = null;
let undo;
console.log(typeof str);
console.log(typeof Number(str));
console.log(typeof Number(str2));
console.log(Number(str)); //Print NaN
console.log(Number(str2));

console.log(typeof bool);
console.log(typeof Number(bool));
console.log(Number(bool)); //Print 1 bcz true value is 1 if it is then false value is 0

// Null to Number
console.log(typeof nullValue); // object
console.log(typeof Number(nullValue));
console.log(Number(nullValue)); // 0

// Undefined to Number
console.log(typeof undo);
console.log(typeof Number(undo));
console.log(Number(undo));

// ***** 3. Value to Boolean *****
console.log(typeof num);
console.log(typeof Boolean(num));

console.log(typeof str);
console.log(typeof Boolean(str));

console.log(typeof Boolean(nullValue));
console.log(Boolean(nullValue));
