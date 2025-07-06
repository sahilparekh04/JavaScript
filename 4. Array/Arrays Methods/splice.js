let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Use for Remove, Replace and Add element at place
// arr.splice(start,deleteCount,item-n);
// Changes affected in orignal array

// Removing
// Removing index 9 element
console.log(arr.splice(9));
console.log(arr);

// Removing 1 element means removing self
// Removing 1 element from -2 index which is 80 if element are 2 then it will remove 80 and 90
console.log(arr.splice(-2, 1));
console.log(arr);

// Removing 2 element from -2 index which is 70 and 90
console.log(arr.splice(-2, 2));
console.log(arr);

// Replace
console.log(arr);
// In 2 index Delete noting value of replacing is 300
arr.splice(2, 0, 300);
console.log(arr);

//Adding
console.log(arr);
console.log(arr.length);

arr.splice(2, 0, 300, 400);
console.log(arr);
console.log(arr.length);
