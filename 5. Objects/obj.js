let fName = "First Name";
const student = {
  name: "Sahil",
  [fName]: "Parekh",
  "Last Name": "Sanjaybhai",
  age: 21,
  dob: "31-08-2004",
  city: "Ahemdabad",
};

console.log(typeof student);
console.log(student);

// Accesing Object values
console.log(student["age"]);
// Using dot(.) oprator
console.log(student.name);

// When Use of [] notation
// When key has space
console.log(student["Last Name"]);
// when dynamic key
console.log(student[fName]);
console.log(student["First Name"]);

// Object value in array by Object.values()
let objValues = Object.values(student);
console.log(objValues);

// Object key in array by Object.keys()
let objKeys = Object.keys(student);
console.log(objKeys);

// Object key and value in array by Object.entries() but we git 2d array array inside array
let objKeysAndValues = Object.entries(student);
console.log(objKeysAndValues);

for (const element of objKeysAndValues) {
  console.log(element);
}

