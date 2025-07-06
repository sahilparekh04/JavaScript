let arr1 = [10, 20, 30]; //Similer Collection
let strArr1 = ["Sahil", "Vivek", "Kenil"]; //Similer Collection
let arr2 = ["Sahil", 11, "Vivek", 74]; //Mixed Collection
let arr3 = []; //Empty Arrays

// Returns length of array
console.log(arr1.length);
// Accessing Array values by index
console.log(arr1[1]);

// Directly accessing string character by index in array
console.log(strArr1[1][0]); //V

// Accessing threw for...of loop
for (const element of arr1) {
  console.log(element);
}
// Accessing threw for..in loop (but not recommanded)
for (const i in strArr1) {
  console.log(strArr1[i]);
}

// Arrays are mutable so we can change array
arr1[0] = 1;
console.log(arr1);

// Adding value at any index if exist than updated if not than created in between them the array are empty.
arr1[4] = 100;
console.log(arr1);
console.log(arr1[3]); //undefiend(Empty)
