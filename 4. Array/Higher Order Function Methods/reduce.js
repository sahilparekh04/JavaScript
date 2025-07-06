// reduce array in to single value
// Takes two arrgument accumalator and element

let arr = [1, 2, 3, 4, 5];

let newArr = arr.reduce((acc, e) => acc * e);
console.log(newArr);

/*
    e = 1 * acc = 0 = 1; 
    e = 2 * acc = 1 = 2;
    e = 3 * acc = 2 = 6;
    e = 4 * acc = 6 = 24;
    e = 5 * acc = 24 = 120;
*/

let newArr2 = arr.reduce((acc, item, index, arr) => {
  let arrValue = arr.reduce((a, i) => a * i);
  let newValue = arrValue + (acc + item + index);
  return newValue;
});
console.log(newArr2);

/*
    e = 1 * acc = 0 = 1; 
    e = 2 * acc = 1 = 2;
    e = 3 * acc = 2 = 6;
    e = 4 * acc = 6 = 24;
    e = 5 * acc = 24 = 120;

    arr = 120

    item(1) + index(0) + arr(120) + acc(0) = 121
    item(2) + index(1) + arr(120) + acc(121) = 224
    item(3) + index(2) + arr(120) + acc(224) = 349
    item(4) + index(3) + arr(120) + acc(349) = 476
    item(5) + index(4) + arr(120) + acc(476) = 25
*/
