const cal = {
  PI: 3.14,
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
};
console.log(cal.PI);
console.log(cal.add(10, 20));

// Or

const cal2 = {
  PI: 3.14,
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
};
console.log(cal2.sub(20, 10));
