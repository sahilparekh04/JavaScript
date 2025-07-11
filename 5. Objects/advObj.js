// Computed Property
let name = "name";
let person = {
  [name]: "Sahil",
};
console.log(person.name);

// Method Shorthand

let obj = {
  getName(name) {
    console.log("Hello", name);
  },
};
obj.getName("Sahil");

// Or

// let obj = {
//   getName: function (name) {
//     console.log("Hello", name);
//   },
// };
// obj.getName("Sahil");\

// Property ShortHand

// const access = "AccessValue";
// let user = {
//   access: access,
// };
// console.log(user.access);

// Or

const access = "AccessValue";
let user = {
  access,
};
console.log(user.access);
