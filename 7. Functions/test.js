function test(surname, name, lastname) {
  console.log(
    `Hello, Mr.${name} can i call you Mr.${surname}, Your father Mr.${lastname} must be proud.`
  );
}

test("Parekh", "Sahil", "Sanjaybhai");

function returnTest() {
  console.log("Testing is On!");
  let test = "Test";
  return test;
}
let returnTestVariable = returnTest;
console.log(returnTestVariable());

let arr = ["Hello", "Sahil", "Parekh"];
function concatFun(arr) {
  let stringValue = "";
  for (const element of arr) {
    stringValue += ` ${element}`;
  }
  return stringValue.trim();
}

let concat = concatFun(arr);
console.log(concat);
