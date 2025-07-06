let fName = "First Name";
const student = {
  name: "Sahil",
  [fName]: "Parekh",
  "Last Name": "Sanjaybhai",
  age: 21,
  dob: "31-08-2004",
  city: "Ahemdabad",
};
console.log(student);
// Deleting keys
delete student[fName];
console.log(student);
console.log("Key Deleted");



// Adding Keys
student.surname = "Parekh";
console.log("value added");
console.log(student);

// Updating
student.age = 20;
console.log("value updated");
console.log(student);


