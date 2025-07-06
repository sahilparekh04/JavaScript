// Rrturn new array and in callback function according to condtion if element return true than add to new array else element returns false then not add to new array.
let arr = [1, 2, 3, 4, 5];

let newArr = arr.filter((e) => e % 2 == 0);
console.log(newArr);

// not Works
let newArr2 = arr.forEach((e) => {
  return e % 2 == 0;
});
console.log(newArr2);
