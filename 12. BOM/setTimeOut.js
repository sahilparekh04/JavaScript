//run one time after particular time
setTimeout(() => {
  console.log("Hello World!");
}, 1000);

let hello = setTimeout(() => {
  console.log("Hello World!");
}, 2000);

// use to stop setTimeOut 
clearTimeout(hello);
