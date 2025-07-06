let arr = [1, 2, 3, 4, 5];

arr.forEach((e) => {
  console.log(e * e);
});

arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

let arr2 = [
  {
    name: "Sahil",
    age: 20,
  },
  {
    name: "Vivek",
    age: 21,
  },
];
arr2.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

arr2.forEach((e) => {
  console.log(e.name);
});

// forEach itrate on each element of array but not return a new array its only log vlaues.

let names2 = arr2.forEach((e) => {
  return e.name;
});
console.log(names2); //undefined bcz forEach not return new array.
