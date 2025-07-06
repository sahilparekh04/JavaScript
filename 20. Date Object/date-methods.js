let currDate = new Date();

// Date
// Get Current date
console.log(currDate.getDate());
// Get Current Month but in number
// *Note: Months in js start with 0
console.log(currDate.getMonth());
// Get Current Year
console.log(currDate.getFullYear());

// Hour
// Get hour in number by 0-23
console.log(currDate.getHours());
// Get Minutes
console.log(currDate.getMinutes());
// Get Seconds
console.log(currDate.getSeconds());
// Get Milli Seconds
console.log(currDate.getMilliseconds());

// Get current week day in number 0-6 and 0 is for sunday so saturday is 6 and monday is 1
console.log(currDate.getDay());

console.log(currDate.getTime());
