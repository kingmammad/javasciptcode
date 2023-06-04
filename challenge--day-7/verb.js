/*function sumnumber() {
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
if (bmi(hieght, weight) < 18.5) {
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
    month.includes("jen") ||
    month.includes("feb") ||
    month.includes("mar")
  ) {
    console.log("Autumn");
  } else if (
    month.includes("apr") ||
    month.includes("may") ||
    month.includes("jun")
  ) {
    console.log("summer");
  } else if (
    month.includes("jen") ||
    month.includes("jul") ||
    month.includes("aug")
  ) {
    console.log("spring");
  } else if (
    month.includes("oct") ||
    month.includes("nev") ||
    month.includes("dec")
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
  for (let a = 0; a < arguments.length; a++) {
    check += arguments[a];
  }
  console.log(check);
}
printarray(3, "ef", 6, "df");

function solve(a, b, c) {
  let x1 = ((-b + Math.sqrt(b * b - 4 * a * c)) / 2) * a;
  let x2 = ((-b - Math.sqrt(b * b - 4 * a * c)) / 2) * a;
  if (b * b - 4 * a * c > 0) {
    console.log(x1);
    console.log(x2);
  } else if (b * b - 4 * a * c == 0) {
    console.log(-b / (2 * a));
  } else {
    console.log("your candition have not solve");
  }
}
solve(1, 4, 4);

//4th
function showdatetime() {
  let time = new Date();
  console.log(
    `${time.getDay()}/${time.getMonth()}/${time.getFullYear()}  ${time.getHours()}:${time.getMinutes()} `
  );
}
showdatetime();
//5th
function swapvalue(x, y) {
  console.log(`x=>${x},  y=>${y}`);
}
swapvalue(4, 6);

//6th
let promt = prompt("please enter your name to reverse");
function reverse(input) {
  let rev = "";
  for (let i = input.length - 1; i >= 0; i--) {
    rev += input[i];
  }
  console.log(rev);
}
reverse(promt);
//6th
function reversarray(arr) {
  let cff = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    cff.push(arr[i]);
  }
  console.log(cff);
}
reversarray([3, 4, 5, 6, 7, 8]);
//7th
function capitalizm(cap) {
  let newarr = "";
  for (let i = 0; i <= cap.length - 1; i++) {
    newarr += cap[i];
  }
  console.log(newarr.toString().toUpperCase());
}
capitalizm("hi my name is mohammad"); */
//18 9 10 11 12 13
function oddsandeven(get) {
  let even = [];
  let odds = [];
  for (let i = 0; i <= get; i++) {
    if (i % 2 == 0) {
      even.push(i);
    } else {
      odds.push(i);
    }
  }
  console.log(`the number of even are ${even.length}`);
  console.log(`the number of odds are ${odds.length}`);
}
oddsandeven(100);
//14th
function sum() {
  let sumnumber = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumnumber += arguments[i];
  }
  console.log(sumnumber);
}
sum(2, 4, 5, 2);
