// let address = {
//   city: "Ahemdabad",
// };
// let obj = {
//   name: "sahil",
//   age: 21,
//   // __proto__: address,
// };
// obj.__proto__ = address;
// console.log(obj.city);

// Prototype Chaining
// every object have only one prototype and if any property or method find in its main object or it's first prototype than it will print that value not deep dive into another one.

let pincode = {
  pincode: 382418,
};
let address = {
  city: "Ahemdabad",
  pincode: 382425,
  __proto__: pincode,
};
let obj = {
  name: "sahil",
  age: 21,
  // __proto__: address,
};
obj.__proto__ = address;
console.log(obj.city);
console.log(obj.pincode);
