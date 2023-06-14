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
const newcountry = country.map(el => el.toUpperCase());
console.log(newcountry);
