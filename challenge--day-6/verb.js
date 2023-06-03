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

// let number;
// let name = prompt("please enter your name");
// console.log(name.length);
// let result =
//   name.length > 7
//     ? console.log("your name is long")
//     : console.log("your name is short");

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
let cha = "ASDFGHJKLQWERTYUIOPZXCVBNM1234567890sdfaghjklzxcvbnmqwertyuiop";

let charsum = "";
let lengthchar = Math.trunc(Math.random() * 30) + 1;
for (let i = 1; i <= lengthchar; i++) {
  let randomnumber = Math.trunc(Math.random() * cha.length) + 1;
  let randomcha = cha.charAt(randomnumber);

  charsum += randomcha;
}

console.log(charsum);
let color = [];
for (let i = 0; i < 3; i++) {
  let randomcolor = Math.trunc(Math.random() * 240) + 1;

  color.push(randomcolor);
}
console.log(`rgb(${color[0]},${color[1]},${color[2]})`);
const hexachar = "023456789ABCDEF";
let char = "#";
for (let i = 1; i < 6; i++) {
  let randomchar = Math.trunc(Math.random() * 16);
  char += hexachar[randomchar];
}
console.log(char);
let a = [23, 4, 5, 53, 35, 3423];
// level 2// {4}
let newarray = [];
for (let i = 0; i < country.length; i++) {
  newarray.push(country[i].toUpperCase());
}
console.log(newarray);

//----5----//
let lengtharray = [];
for (let i = 0; i < country.length; i++) {
  lengtharray.push(country[i].length);
}

console.log(lengtharray);
// //----6----//

let arraytotal = [];

for (let i = 0; i < country.length; i++) {
  let af = [];
  arraytotal.push(af);

  af.push(
    country[i],
    country[i].substring(0, 3).toUpperCase(),
    country[i].length
  );
}
console.log(arraytotal);
//---7---//
let land = [];
for (let a = 0; a < country.length; i++) {
  if (country[a].includes("land")) {
    land.push(country[a]);
  }
}
console.log(land);
//---7---//
let arraytotalweb = [];

for (let i = 0; i < webtech.length; i++) {
  let web = [];
  arraytotal.push(web);

  af.push(
    webtech[i],

    webtech[i].length
  );
}
//---15---//
/*let fruit = ["banana", "orange", "mango", "lemon"];
let fruitrevers = [];
for (let i = fruit.length; i >= 0; i--) {
  fruitrevers.push(fruit[i]);
  console.log(i);
}
console.log(fruit);
console.log(fruitrevers);*/

//---16---//
// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];
// const full = [];
// for (let i = 0; i <= fullStack; i++) {
//   full.push(fullStack[i]);
// }
// const fll = [];
// for (let i = 0; i <= full.length; i++) {
//   fll.push(full[i]);
// }
// console.log(full);
// console.log(fll);
// for (let i = 1; i <= 100; i++) {
//   let flag = true;

//   // looping through 2 to user input number
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       flag = false;
//       break;
//     }
//   }

//   // if number
//   if (flag) {
//     console.log(i);
//   }
// }
/*const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
console.log(countries.sort());*/
