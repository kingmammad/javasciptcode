const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

//1th
let empty = new Set();
console.log(empty);
//2th
let lop = [];
for (let a = 0; a <= 10; a++) {
  lop.push(a);
}
let setloop = new Set(lop);
console.log(setloop);
//3th
setloop.delete(3);
console.log(setloop);
//4th
setloop.clear();
//5th
const arr = ["akbar", "shoja", "asghar", "haidar", "ali"];
let newarr = new Set(arr);
console.log(newarr);
for (elem of newarr) {
  console.log(elem);
}
//6th
let countrie = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.log(countrie);
let map = new Map(countrie);
console.log(map);
for (elem of countrie) {
  for (let a = 0; a <= elem.length - 1; a++) {
    map.set(elem[a], elem[a].length);
  }
}
console.log(map);
//===================================level 2
//1TH
let c = [...a, ...b];
let C = new Set(c);
console.log(C);
//2th
let A = new Set(a);
let B = new Set(b);
let des = a.filter((elem) => B.has(elem));
let dd = new Set(des);
console.log(dd);
//3th
let count = countries.map((ele) => ele.languages).flat();
let ma = new Set(count);
console.log(ma.size);
//============================level 3th
//1th

function mostSpokenLanguages(countries, limit) {
  const languageCounts = {};

  for (const country of countries) {
    const languages = country.languages;

    for (const language of languages) {
      if (languageCounts.hasOwnProperty(language)) {
        languageCounts[language]++;
      } else {
        languageCounts[language] = 1;
      }
    }
  }

  const sortedLanguages = Object.entries(languageCounts).sort(
    (a, b) => b[1] - a[1]
  );

  const topLanguages = sortedLanguages.slice(0, limit);
  const formattedLanguages = topLanguages.map(([language, count]) => ({
    [language]: count,
  }));

  return formattedLanguages;
}
console.log(mostSpokenLanguages(countries, 14));
dsfsdfsd
