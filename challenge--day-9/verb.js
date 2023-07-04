const nubemr = [2, 34, 5, 3];
const arr = (num) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  num.forEach(callback);
  return sum;
};
console.log(arr(nubemr));
function hello() {
  let da = new Date();
  console.log("heklkfl");
  console.log(da.getSeconds());
}
// setInterval(hello, 1000);
let array = ["ahmad", "mosa", "mosatafa", "akbar"];
array.forEach((element) => console.log(element.toUpperCase()));

const country = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const newcountry = country.map((el) => el.toUpperCase());
console.log(newcountry);
const sliccountry = country.map((element) => element.toUpperCase().slice(0, 3));
console.log(sliccountry);
const endcountry = country.filter((ele) => ele.endsWith("ia"));
console.log(endcountry);
const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];
const fff = scores.filter((score) => score.score > 80);
console.log(fff);
let age = [3, 5, 64, 3, 46, 53, 34];
const agechoise = age.find((eles) => eles > 5);
console.log(agechoise);
let names = ["ahmad", "ali", "akbar", "mosa"];
const areAllStr = names.some((name) => name === "mosad"); // Are all strings ?
console.log(areAllStr);
const numbers = [9.81, 3.14, 100, 37];
console.log(numbers.sort());

let sumenubmer = [3, 5, 64, 3, 46, 53, 34];
const sume = sumenubmer.reduce((a, b) => a + b, 0);
console.log(sume);
let summ = 0;
let sume1 = sumenubmer.forEach((a) => (summ += a));
console.log(summ);
//exersices level two
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names__levelone = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers__leveltwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//1th
let a = [];
let foreach = countries.forEach((element) =>
  console.log(element.toUpperCase())
);
// console.log(foreach);
let ff = countries.forEach((ddd, fff) => console.log(ddd, fff));
// console.log(ff);
function callbac(asss) {
  function vvv(input) {
    console.log(input.toUpperCase());
  }
  asss.forEach(vvv);
}
//2th
callbac(countries);
let multi = numbers__leveltwo.map((elemnt) => elemnt * elemnt);
console.log(multi);
let found = countries.filter((elmenet) => elmenet.includes("land"));
console.log(found);
let foundv2 = multi.reduce((a, b) => a + b);
console.log(foundv2);
//3th
let countriesv3 = countries.forEach((element) => console.log(element));
//4th
let name = names__levelone.forEach((elment) => console.log(elment));
//5th
let number = numbers__leveltwo.forEach((element) => console.log(element));
//6th
let countries__newarray = countries.map((elment) => elment.toUpperCase());
console.log(countries__newarray);
//7th
countries_length = countries.map((elemnt) => elemnt.length);
console.log(countries_length);
//8th
let multiv2 = numbers__leveltwo.map((elemnt) => elemnt * elemnt);
console.log(multiv2);
//9th
countriesv4 = countries__newarray.map((element) =>
  console.log(element.toUpperCase())
);
//10th
let pruduct = products.map((elment) => elment.price);
console.log(pruduct);
//11th
let filterone = countries.filter((elem) => elem.includes("land"));
console.log(filterone);
//12th
let filtertwo = countries.filter((elemnt) => elemnt.length == 6);
console.log(filtertwo);
//13th
let filterthree = countries.filter((elemnt) => elemnt.length >= 6);
console.log(filtertwo);
//14th
let filterfour = countries.filter((ele) => ele.startsWith("E"));
console.log(filterfour);
//15th
let filtervalue = products.filter((eleme) => typeof eleme.price == typeof 4);
console.log(filtervalue);
//16th
function getStringlist(prameter) {
  let s = prameter.reduce((elem, ele) => elem + " " + ele);
  console.log(s);
}
getStringlist(countries);
//17th
const sumenumberone = numbers__leveltwo.reduce((elme, ele) => elme + ele);
console.log(sumenumberone);
//18th
const countriescentence = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "Iceland",
];

const sentence = countriescentence.reduce((accumulator, country, index) => {
  if (index === 0) {
    return country;
  } else if (index === countriescentence.length - 1) {
    return accumulator + ", and " + country;
  } else {
    return accumulator + ", " + country;
  }
});

const finalSentence = sentence + " are north European countries.";
console.log(finalSentence);
//19th
let h = [3, 5, 6, 4, 2];

const everyu = h.some((elem) => elem % 2 == 0);
console.log(everyu);
const someyu = h.every((elme) => elme % 2 == 0);
console.log(someyu);
