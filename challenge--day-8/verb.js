function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+3584545454545",
};
let object1 = {
  name: "mohammad",
  lastName: "amiri",
  age: 23,
  fathername: "ahmad",
};
const copyPerson = Object.assign({}, object1);
console.log(copyPerson);
const values = Object.values(object1);
console.log(values);

const enter = Object.entries(object1);
console.log(enter);
console.log(object1.hasOwnProperty("mohammad"));
// level one
//1th
let dog = {};
//2th
console.log(dog);
