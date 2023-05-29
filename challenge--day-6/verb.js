/*
welcom the 30days of javascript
you can if want try 


*/

//--------Level 1---------//
const country = [
  "afghnistan",
  "albania",
  "bolivia",
  "canada",
  "danmark",
  "finland",
  "iran",
];

const webtech = [
  "Html",
  "css",
  "javascript",
  "react",
  "redux",
  "node",
  "monogoDB",
];

for (let i = 0; i < country.length; i++) {
  console.log(country[i]);
}
console.log(...country);
// for (let j = 0; j < 10; ) {
//   console.log(country);
// }
let count = 0;
while (count <= country.length) {
  console.log(country);
  count++;
}
let i = 0;
do {
  console.log("hello how are you ");
  i++;
} while (i <= 6);

let number;
let name = prompt("please enter your name");
console.log(name.length);
let result =
  name.length > 7
    ? console.log("your name is long")
    : console.log("your name is short");

let hash = "";
for (let i = 0; i <= 7; i++) {
  hash += "#";
  console.log(hash);
}
for (let a = 0; a <= 10; a++) {
  console.log(` ${a} x ${a} = ${a * a}`);
}
for (let i = 0; i <= 10; i++) {
  let number = Math.pow(i, 2);
  console.log(`${i} ${number} ${i * number}`);
}
let sumodd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
    sumodd += i;
  }
}

let sumevent = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
    sumevent += i;
  }
}
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`the sum of all numbers from 0 to 100 is ${sum} `);

console.log(sumevent);
console.log(sumodd);
let sumarray = [];
sumarray.push(sumodd, sumevent);
console.log(sumarray);

let randomarray = [];
for (let i = 1; i <= 5; i++) {
  let random = Math.trunc(Math.random() * 5) + 1;
  randomarray.push(random);
}
console.log(randomarray);
let cha = "ASDFGHJKLQWERTYUIOPZXCVBNM1234567890asdfghjklzxcvbnmqwertyuiop";
let char = [];
let charsum = "";
let lengthchar = Math.trunc(Math.random() * 50) + 1;
for (let i = 1; i <= lengthchar; i++) {
  let randomnumber = Math.trunc(Math.random() * cha.length) + 1;
  let randomcha = cha.charAt(randomnumber);
  char.push(randomcha);
  charsum += randomcha;
}
console.log(...char);
console.log(charsum);
let color = [];
for (let i = 0; i < 3; i++) {
  let randomcolor = Math.trunc(Math.random() * 240) + 1;

  color.push(randomcolor);
}
console.log(`rgb(${color[0]},${color[1]},${color[2]})`);
