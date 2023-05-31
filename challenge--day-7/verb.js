function sumnumber() {
  let sum = 0;

  for (let i = 1; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumnumber(1, 3, 35, 53, 35));
const sumarray = (...array) => {
  let sum = 0;
  for (const sumel of array) {
    sum += sumel;
  }
  return sum;
};
console.log(sumarray(2, 3, 5, 3, 32, 23, 4));

function sumnew(...sumbi) {
  let sumu = 0;
  for (const sumele of sumbi) {
    sumu += sumele;
  }
  return sumu;
}
console.log(sumnew(2, 3, 5, 3, 32, 7, 4));
const anonmymousfun = function () {
  console.log("hello world i come to kill the chat  gpt");
};
anonmymousfun();
let a = Number(prompt("please enter your number for squar"));
const ali = function (n) {
  return n * n;
};
console.log(` your squer is ${ali(a)}`);
// max number
function findmax(...arr) {
  let a = Math.max(...arr);
  return a;
}

console.log(findmax(1, 3, 8, 34, 9));
//  challenge  BMI

let hieght = prompt("please enter your height in meter");
let weight = prompt("please enter your weight");
function bmi(hieght1, weight2) {
  let bmii = weight2 / (hieght1 * hieght1);

  return bmii;
}
if (bmi(hieght, weight) <= 18.5) {
  console.log("underwight");
} else if (bmi(hieght, weight) > 18.5 && bmi(hieght, weight) <= 25) {
  console.log("normal weight");
} else if (bmi(hieght, weight) > 25 && bmi(hieght, weight) <= 30) {
  console.log("Overweight");
} else if (bmi(hieght, weight) > 30) {
  console.log("Obese");
}
//the month import

let season = prompt("please enter your month");
function checkseason(month) {
  if (
    season.includes("jen") ||
    season.includes("feb") ||
    season.includes("mar")
  ) {
    console.log("Autumn");
  } else if (
    season.includes("apr") ||
    season.includes("may") ||
    season.includes("jun")
  ) {
    console.log("summer");
  } else if (
    season.includes("jen") ||
    season.includes("jul") ||
    season.includes("aug")
  ) {
    console.log("Sep");
  } else if (
    season.includes("oct") ||
    season.includes("nev") ||
    season.includes("dec")
  ) {
    console.log("winter");
  } else {
    console.log("you entered a wrong month");
  }
}
checkseason(season);
let x = Number(prompt("plese enter your x to get y"));
function f(x) {
  let a = 2;
  let b = 5;
  let c = 1;
  let y = -(a * x + c) / b;
  return y;
}
console.log(`your y is in the ax+by+c=0 is: ${f(x)}`);

function printarray() {
  let check = "";
  for (let a = 1; a < arguments.length; a++) {
    check += arguments[a];
  }
  console.log(check);
}
printarray(3, "ef", 6, "df");
// looping from lowerNumber to higherNumber
for (let i = 1; i <= 100; i++) {
  let flag = true;

  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = false;
      break;
    }
  }

  // if number
  if (flag) {
    console.log(i);
  }
}

//level 2 // 4
