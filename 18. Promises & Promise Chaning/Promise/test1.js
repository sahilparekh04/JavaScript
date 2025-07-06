/*
    We take Dish name as an argument if it is available then print else genrate error
*/

function isAvilable(dish) {
  let check = new Promise((resolve, reject) => {
    const avilDishes = ["maggie", "panner masala", "dhosa", "idle"];
    for (const dishes of avilDishes) {
      if (dish == dishes) {
        resolve(dish);
      } else {
        reject(dish);
      }
    }
  });

  return check;
}

let avialble = isAvilable;

avialble("manchuriun")
  .then((result) => {
    console.log(`${result} is avialble.`);
  })
  .catch((err) => {
    console.log(`The ${err} dish is not avialble.`);
  });
