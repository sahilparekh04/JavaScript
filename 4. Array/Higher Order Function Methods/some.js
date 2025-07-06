// some return true or false value if any one value is true than return true
// when every value false then returns false
let arr = [2, 4, 5, 6];
let arr2 = [1, 3, 5];

let newArr = arr.some((e) => e % 2 == 0);
console.log(newArr); // true

let newArr2 = arr2.some((e) => e % 2 == 0);
console.log(newArr2); // false
