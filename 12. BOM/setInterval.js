// setInterval(() => {
//   console.log("Hello World!");
// }, 1000); // runs infinite bcz we have to store in variable.

let hello = setInterval(() => {
  console.log("Hello World!");
}, 100);

setTimeout(() => {
  clearInterval(hello);
}, 1000);
