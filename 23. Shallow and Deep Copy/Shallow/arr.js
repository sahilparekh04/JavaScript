// Shallow Copy of array/object means nested array and object has refrence error
// Array shallow copy method using splice and spred oprator
let arr = [1, ["name", "Sahil"], 2, ["name", "Vivek"]];

let copyarr = [...arr];
console.log(copyarr);
copyarr[1][1] = "Yash";
console.log(arr);

let copyarr2 = arr.slice();
console.log(copyarr2);
copyarr2[3][1] = "Meet";
console.log(arr);
