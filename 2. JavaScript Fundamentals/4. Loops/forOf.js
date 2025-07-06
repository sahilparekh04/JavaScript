// use to itrate array, string, HTML Colletion, Nodelist
// not directly use for object bcz object is not itratable.
let fruits = ["apple", "banana", "mango"];
let string = "Sahil";

for (const fruit of fruits) {
  console.log(fruit);
}
for (const char of string) {
  console.log(char);
}

// Itrating Object using for...of loop using Object.entries() Method;
let person = {
  firstName: "Sahil",
  lastName: "Parekh",
  age: 20,
};
// Accesing object key and values using for of
for (const [key, values] of Object.entries(person)) {
  console.log(key);
  console.log(values);
}
