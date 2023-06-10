/*
welcom the 30days of javascript
you can if want try 


*/

//--------Level 1---------//
let one = Array();
console.log(one);
let two = [1, 2, 3, 4, 5, 6];
console.log(two);
console.log(two.length);
console.log(two[0]);
let four = two.length / 2;
console.log(two[four]);
let lastitem = two.length - 1;
console.log(two[lastitem]);
const mixedDataType = ["mohammd", "ahmad", 23, 43, "ali"];
console.log(mixedDataType);
console.log(mixedDataType.length);
const itcompanies = [
  "facebook",
  "google",
  "microsoft",
  "apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itcompanies);
console.log(itcompanies.length);
let middlecampany = Math.round(itcompanies.length / 2);
let firstcampany = itcompanies[0];
let lastcampnay = itcompanies.length - 1;
console.log(
  `first:${firstcampany}, Middle:${itcompanies[middlecampany]}, Last:${itcompanies[lastcampnay]}`
);
for (let i = 0; i < itcompanies.length; i++) {
  console.log(itcompanies[i]);
}
console.log(itcompanies.toString());
console.log(itcompanies.join(" , "));
itcompanies[0] = "FACEBOOK";
itcompanies[1] = "GOOGLE";
console.log(itcompanies);
let com = itcompanies.slice(0, 6);
console.log(`${com} and Amazon are big IT companies`);
let newcominput = prompt("please enter the campany");

let newcom = itcompanies.includes(newcominput);

if (newcom) {
  console.log("the company exist");
} else {
  console.log("the company not found");
}
console.log(itcompanies.sort());
console.log(itcompanies.reverse());
console.log(itcompanies.slice(0, 3));
console.log(itcompanies.slice(4, 7));

console.log(itcompanies.slice(3, 4));
let arrayss = [1, 4, 5, 6, 67, 10, 7];
console.log(arrayss.slice(2, 5));
