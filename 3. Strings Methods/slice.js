let str = "Hello World";

// slice or cut specific part of string
console.log(str.slice(1, 5));
console.log(str.slice(6));

// Negative index -1(10-1=9),so 9 index ignore and than after index print which is 10 index.
console.log(str.slice(-1)); // 10-1 = 9
console.log(str.slice(-5)); // 10-5 = 5
