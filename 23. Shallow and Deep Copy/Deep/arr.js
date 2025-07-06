// Deep Copy of array/object and nested array and object has their own address
// Array Deep copy method using structuredClone and Json but using json function,date can not be handle and undefined ignored
let arr = [1, ["name", "Sahil"], 2, ["name", "Vivek"]];
console.log(`Origanal array`, arr);

let copyarr = JSON.parse(JSON.stringify(arr));
console.log(`Copy array`, copyarr);
copyarr[1][1] = "Yash";
console.log(`Copy array after change `, copyarr);
console.log(`Origanal array`, arr);

let copyarr2 = structuredClone(arr);
console.log("Copy array by structure clone",copyarr2);
copyarr2[1][1] = "Yash";
console.log(`Copy array after change `, copyarr2);
console.log(`Origanal array`, arr);

