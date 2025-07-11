// Spread Oprator(...) spread itretable(Array,Strings) in multiple values

// *******************************************************************************************

// 1.0 Spread Oprator with Arrays
let arr = [1, 2, 3, 4, 5];
// 1.1 Spread array
console.log(...arr);
// 1.2 Making copy of another array and it will not affect orignal array
let newArr = [...arr];
console.log(newArr);
console.log(newArr.push(6));
console.log(newArr);
console.log(arr);
// 1.3 Finding minimum value of array using spread oprator
console.log(Math.min(...arr));
// 1.4 Finding maximum value of array using spread oprator
console.log(Math.max(...arr));
// 1.5 Merge two arrays;
let arr3 = [...arr, ...newArr];
console.log(arr3);
// 1.6 Compose
let arr4 = [100, ...arr, 200];
console.log(arr4);

// *******************************************************************************************

// 2.0 Spread Oprator with String
// 2.1 Spreding String values
let str = "Hello World";
console.log(...str);
// 2.2 Stores strings char in array
let strArr = [...str];
console.log(strArr);

// *******************************************************************************************

// 3.0 Spread Oprator with Objects
let obj = {
  name: "Sahil",
  age: 20,
};
// 3.1 Making Copy of object in another object using spread oprator
const copyObj = { ...obj };
console.log(copyObj);
// 3.2 Adding Data while copy object
const copyObj2 = { ...obj, id: 111 };
console.log(copyObj2);
// 3.3 Spread Array in object
const objarr = [1, 2, 3, 4, 5];
const arrayOfObject = { ...objarr };
console.log(arrayOfObject);
// 3.4 Spread String in object
const str2 = "Hello World";
const strObj = { ...str2 };
console.log(strObj);
// 3.5 Merge 2 obj
let obj3 = { ...obj, ...copyObj2 };
console.log(obj3);
