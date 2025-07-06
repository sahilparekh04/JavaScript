// Every return true or false
// if every element are ture then return true else if one of them are flase then return false.

let arr = [2, 4, 6];
let arr2 = [2, 4, 5, 6];

let isEven = arr.every((e) => e % 2 == 0);
console.log(isEven); //True

let isEven2 = arr2.every((e) => e % 2 == 0);
console.log(isEven2); //False
