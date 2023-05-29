/*
welcom the 30days of javascript
you can if want try 


*/

//--------Level 1---------//

let switchkeyword = prompt("please select the day of week");
let days = switchkeyword.toLowerCase();
switch (days) {
  case "starday":
    console.log("the day is starday");
    break;
  case "sunday":
    console.log("the day is sunday");
    break;
  case "monday":
    console.log("the day is monday");
    break;
  case "wednsday":
    console.log("the day is wednsday");
    break;
  case "friday":
    console.log("the day is friday");
    break;
  default:
    console.log("we haven't this day in the week");
}

let num = prompt("please enter your number");
switch (true) {
  case num > 0:
    console.log("your number is positive");
    break;
  case num == 0:
    console.log("your number is zero");
    break;
  case num < 0:
    console.log("your number is negetive");
    break;
  default:
    console.log("please enter a n0umber you set a string");
}

let numberage = prompt("enter your age");

if (numberage >= 18) {
  console.log("you are old enough to drive");
} else {
  console.log(`you are left with ${18 - numberage} years to drive`);
}
let myage = 20;
let yourage = prompt("enter your age");
console.log(yourage);
if (yourage < myage) {
  console.log(`you are  ${myage - yourage} older than me`);
} else {
  console.log(`you are ${yourage - myage} years older than me`);
}
let a = 4;
let b = 3;
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);
//--------Level 2---------//

let numberone = prompt("please enter a number for odd, even");

let result = numberone % 2;
if (result == 0) {
  console.log(`${numberone} is an even number`);
} else [console.log(`${numberone} is an odd number`)];

let mounth = prompt("please enter your month");
