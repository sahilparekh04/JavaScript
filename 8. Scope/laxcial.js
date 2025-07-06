{
  let a = 6;
  {
    let b = 10;
    console.log(a);
  }
  console.log(b); //error
}
console.log(a);


// Laxical scope means inner function or inner block can access value of outer or parent function or blocked but outer blocked and function can not access value of inner blocked or function.

// Laxical scope using blocked can not work on var but using let and const it works

// function outer() {
//   let a = 10; // Function Scoped
//   function inner() {
//     // Function Scoped
//     let b = 11; // Laxcial Scoped
//     console.log(a);
//     console.log(b);
//   }
//   inner();
//   console.log(b); // Error
// }
// outer();
