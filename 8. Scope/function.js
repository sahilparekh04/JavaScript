// Varible defined in function are function scoped means that can not be accessible out side the function. it applies on all keywords like var,let and const

var a = 10; // Global Scope

function cal() {
  console.log(a);
  var b = 11;
  console.log(b); // Function Scope
}
cal(); // 10 11;
// console.log(b); // error
