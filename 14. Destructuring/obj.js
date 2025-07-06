const student = {
  name: "Sahil",
  age: 20,
  city: "Ahemdabad",
};
// When we want indiviual value of obj then write obj key as it is
let { name, age } = student;
console.log(name);
console.log(age);
// When we want diffent variable name the first write key name then variable name
let { name: naam, age: umar } = student;
console.log(naam);
console.log(umar);
// If key not exist then defining default vlaue
let { course = "B.C.A" } = student;
console.log(course);
