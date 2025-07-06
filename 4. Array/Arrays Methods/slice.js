let arr = [10, 20, 30, 40, 50];

// Copies a portion of array without changing orignal one
console.log(arr.slice(1, 3));
console.log(arr);

// Storing copies portion of array in diffent array
let newarr = arr.slice(1, 3);
console.log(newarr);

// Coping whole array by without defining start and end
let newarr1 = arr.slice();
console.log(newarr1);

let newarr2 = arr.slice(2);
console.log(newarr2);

let newarr3 = arr.slice(-2); // 4 - 2 = 2 0,1,2 index are ingnore and than after are retuns
console.log(newarr3);
