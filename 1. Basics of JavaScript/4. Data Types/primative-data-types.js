// Numbers, String, Boolean, Null, Undefined, Bigint, Symbol

// Numbers
let numbers = 20; //Stores integer and floating values.
// typeof is oprator use to check type of variable.
console.log(typeof numbers);

// String
// strings define in '' or ""
let name = "Sahil"; //Stores character and strings.
console.log(typeof name);
let emptyStrings = ""; //We can define empty string by "" or " ".
console.log(typeof emptyStrings);
// String indices
// * Note - Space has also it's index.
console.log(name[0]); //We can retrive particular character by it's index.

// Boolean
let is_age = true; //Represent value in true and false.
// * Note - JS is case-sensetive so True or False is not valid for represent boolean values.
console.log(typeof is_age);

// Bigint();
let bigNumber = 1212313123n;
console.log(typeof bigNumber);

//Null & Undefined
// Undefined
// Undefined is variable that it has not value.
let undo;
console.log(typeof undo);
// Null
// Null value Represent intentional absence of any object value.
let nullValue = null;
console.log(typeof nullValue);
