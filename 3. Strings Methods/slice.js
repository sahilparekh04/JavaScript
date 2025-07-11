let str = "Hello World";

// Copies a portion of String without changing orignal one
console.log(str.slice(1, 5));
let newStr = str.slice(0, 5);
console.log(newStr);
console.log(str);

// console.log(str.slice(6));

// Negative index -1(10-1=9),so 9 index ignore and than after index print which is 10 index.
// console.log(str.slice(-1)); // 10-1 = 9
// console.log(str.slice(-5)); // 10-5 = 5
