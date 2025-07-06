function table(value) {
  for (let index = 1; index <= 10; index++) {
    let mul = value * index;
    console.log(`${value} * ${index} = ${mul}`);
  }
}
table(555);
