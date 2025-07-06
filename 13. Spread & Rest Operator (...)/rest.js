// Rest Oprator(...) bundle multiple value into single value
function restTest(...multipleValue) {
  return multipleValue.reduce((a, b) => a + b);
}
let test = restTest;
console.log(test(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Rest in array while destructuring
let arr = ["Sahil", "Vivek", "Yash", "Meet", "Harshad"];
// Rest oprator bundle all array value in one
let [bestFriend, ...friends] = arr;
console.log(bestFriend);
console.log(friends);

// Rest in object while destructuring
let obj = {
  name: "Sahil",
  age: 20,
  city: "Ahemdabad",
};
let { name: naam, ...allDetails } = obj;
console.log(naam);
console.log(allDetails);
