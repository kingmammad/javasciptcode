/*
welcom the 30days of javascript
you can if want try 


*/
let count = 9;
console.log(count);
let rain = true;
const mosa = rain
  ? console.log(`you need ${count} cthe coat`)
  : console.log("you didnt the coat");
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(555555);
let a = Math.pow(4, 5);
console.log(a);
let year = new Date();
console.log(year.getFullYear());
console.log(year.getDate());
console.log(
  year.getFullYear(),
  year.getHours(),
  year.getMinutes(),
  year.getMonth(),
  year.getDate()
);

let myage = 250;
let yourage = 25;

console.log(`I am ${myage - yourage} years older than you`);
const birth = Number(prompt("please enter your birth year"));
let yearnow = new Date().getFullYear();
let old = yearnow - birth;
if (old >= 18) {
  console.log(`you are ${old}. you are old enough to drive`);
} else {
  console.log(
    `you are ${old}. you will be allowed to drive after ${18 - old} years.`
  );
}
let live = Number(prompt("enter number of years you live:"));
console.log(`you lived ${31536000 * live} second.`);
