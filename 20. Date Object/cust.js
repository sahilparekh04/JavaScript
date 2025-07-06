let date = "08/31/2004"; //mm/dd/yyyy
let date2 = new Date(date);

console.log(date2.toLocaleString());
console.log(date2.getDate());
console.log(date2.getMonth() + 1);
console.log(date2.getFullYear());

// or

let date3 = new Date();
date3.setFullYear("2004");
date3.setMonth("7");
date3.setDate("31");

console.log(date3);
