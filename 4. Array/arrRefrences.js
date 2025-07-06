let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = arr1;

// Array variable holds arrays address not value
// if two arrays have same value but address are diffrent thats why returns false
console.log(arr1 == arr2);
// return true bcz both have same address
console.log(arr1 === arr3);

// So if push or remove do anthing it affect to copy array
arr1.push(6);
console.log(arr1);
console.log(arr3);
arr3.pop(6);
console.log(arr1);
console.log(arr3);
 