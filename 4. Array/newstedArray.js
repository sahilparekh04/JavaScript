let arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];

console.log(arr[0]); // [0,1]
console.log(arr[0][0]); // 0
console.log(arr[0][1]); // 1
console.log(arr[1][1]); // 3

let arr2 = [
  ["X", null, 0],
  [null, "X", null],
  [0, null, "X"],
];

for (const element of arr2) {
  console.log(element);
}

arr2[0][1] = 0;

for (const element of arr2) {
  console.log(element);
}
