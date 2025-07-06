let person = {
  firstName: "Sahil",
  lastName: "Parekh",
  age: 20,
};

// Accesing object keys
for (const key in person) {
  console.log(key);
}
// Accesing object values
for (const key in person) {
  console.log(person[key]);
}
// Accesing object key and values
for (const key in person) {
  console.log(`${key}:${person[key]}`);
}
// Accesing object key and values using for of
for (const [key, values] of Object.entries(person)) {
  console.log(key);
  console.log(values);
}
