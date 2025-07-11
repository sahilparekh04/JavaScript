let arr = ["yash", "vivek", "sahil"];

// let arr2 = arr.find((val, index, arr) => val === "sahil");
// Only First Occurrence of value it will print
let arr2 = arr.find((val, index, arr) => val.length > 4);

console.log(arr2);
