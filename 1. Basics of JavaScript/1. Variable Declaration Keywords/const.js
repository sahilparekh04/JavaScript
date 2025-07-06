// 1. how to declare const
// 1.1 const variable initialized at the time of declartion
// const c;
// c = 10;
// 1.2 objects and array declared with const can be modified
const a = 10;
console.log(a);
// 1.3 *Note: variable decalre out side the block or function are global variable (access from any where)
{
  console.log(a);
}

// 2. const can not be re-declare or re-assign value
const b = 20;
console.log(b);
// 2.1 re-assign value to const
b = 25;
console.log(b); // throws an error
// 2.2 re-declare const variable
// const b = 25; // throws an error


