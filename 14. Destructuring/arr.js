let arr = ["Sahil", "Vivek", "Yash", "Meet", "Harshad", "Kenil"];
// When we want staring value of array and it will not change orignal array value if we chage.
let [bestFriend, bestFriend2] = arr;
console.log(bestFriend);
console.log(bestFriend2);
// Adding remaining array
let [bf1, bf2, ...friends] = arr;
console.log(bf1);
console.log(bf2);
console.log(friends);
