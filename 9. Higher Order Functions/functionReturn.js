
function evenOdd(req) {
  if (req == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (req == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong Request!");
  }
}
let request = "even";
let evenOddTest = evenOdd(request);
evenOddTest(3);
