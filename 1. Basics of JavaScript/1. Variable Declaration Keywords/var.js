// 1. how to declare var
var a = 10;
console.log(a);

// 2. var can be re-declare in js
var a = 20;
console.log(a);

// 3. var can be re-assign
a = 30;
console.log(a);

// 4. var can be change from any where
// 4.1 Not blocked scope (change any globle variable in block)
{
  a = 40;
  console.log(a);
}
// or
// 4.2 Not blocked scope (any variable declare in block can be change out side the block)
{
  var b = "sahil";
  console.log(b);
}
b = "Sahil Parekh";
console.log(b);

// 4.3 var is function-scoped
// function scope means variable declare in function can not be access outside the function.
function varDeclaretion() {
  if (true) {
    var x = 10;
  }
  var y = 20;
  console.log(x);
}
// console.log(y); // it throws an error bcz var is function-scoped
varDeclaretion();

// 5. var can be hoisted and initailzed with undefined
console.log(name); //undefined
var name = "sahil";

//how the js interprited this
// var name;
// console.log(name);
