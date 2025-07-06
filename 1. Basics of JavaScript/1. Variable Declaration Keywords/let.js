// 1. how to declare let
let a = 10;
console.log(a);
// 1.1 *Note: variable decalre out side the block or function are global variable (access from any where)
{
  console.log(a);
}

// 2. let can be re-assign but not re-declare in same scope
a = 20;
console.log(a); // re-assign
// let a = 20; // throws an error
// or
// 2.1 let in diffrent scope for re-declaretion
{
  let a = 30;
  console.log(a);
}
console.log(a);

// 3. let is blocked-scope
// blocked scope means it can be accessible in only in that particular block
{
  let b = 30;
  console.log(30);
}
// console.log(b); // throws an error
// or
function letChange() {
  if (true) {
    let c = 20;
    console.log(c);
  }
  console.log(c); // throws an error
}
letChange();

// 4. let can be hoisted but not initailzed
// console.log(d); //refrence
// let d;
