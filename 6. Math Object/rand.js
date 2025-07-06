let num = Math.random();
let max = 7;
let min = 3;

// math.random give number from 0 to 1 but it can never be = 1 so never genrate 1 number
// console.log(Math.floor(num * 6) + 1);
// Floor round of to < = value
// Random give random value between 0 to 1(1 is exclusive means not genrate)
// Math.floor(Math.random((0 to 1) * (Max Value you want) + (1  for also genrating 1 value))

// Max case
// Math.floor((0.9 * 6) + 1) // 5.4 + 1 = 6.4 and it floor means round of to < = so it genrate 6

// Min case
//Math.floor((0 * 6) + 1) // 0 + 1 = 1 if we add 1 so it add 1 else if not add 1 then genrate 0

console.log(Math.floor(num * (max - min + 1) + min));
