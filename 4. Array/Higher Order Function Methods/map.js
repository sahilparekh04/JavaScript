let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((e) => {
  return e * e;
});
console.log(newArr);

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

let names = arr2.map((e) => {
  return e.name;
});

console.log(names);

// Map itrate on each element of array and return a new array.


