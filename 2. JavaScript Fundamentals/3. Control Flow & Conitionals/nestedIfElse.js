let a = 1000;
let b = 200;
let c = 30;

if (a > b) {
  if (a > c) {
    console.log("value A is max");
  } else {
    console.log("Value C is Max");
  }
} else {
  if (b > a) {
    if (b > c) {
      console.log("value B is max");
    } else {
      console.log("Value C is Max");
    }
  }
}
