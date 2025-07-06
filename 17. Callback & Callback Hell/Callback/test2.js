function cooking(value, callback) {
  // 1. First Execute this statment
  console.log(`${value} is preparing!`);
  // 2. Variable in inislize
  let dish = value;
  // 3. setTimeout execute or run after 1s and then callback function inside setTimeout will execute and call callback function to print that statment or inform.
  setTimeout(() => {
    callback(dish);
  }, 1000);
}

// Calling Main Function and  Directly pass as an argument and defining callback function inside it. and it will call in main function when the work is done.
cooking("Paneer Tikka Masala", (value) => {
  console.log(`${value} is ready to eat now!`);
});

// or

// Define one callback Function and passing the defination to the another function and its call in that function.
function callbackFunction(value) {
  console.log(`${value} is ready to eat now!`);
}
// Calling Main Function and passing callback function defination as an argument
cooking("Meggie", callbackFunction);
