let arr = [20, 50, 60, 90, 10, 100];

// Sort array by converting them into string so not work well for numbers
// More utilze for strings
// console.log(arr.sort());

arr.sort((a, b) => a-b);
console.log(arr);
