// function letsLearnScope() {
//   var gravity = 9.81;
//   console.log(gravity);
// }

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   getFullName: function () {
//     return `${this.firstName}${this.lastName}`;
//   },
//   "phone number": "+3584545454545",
// };
// let object1 = {
//   name: "mohammad",
//   lastName: "amiri",
//   age: 23,
//   fathername: "ahmad",
// };
// const copyPerson = Object.assign({}, object1);
// console.log(copyPerson);
// const values = Object.values(object1);
// console.log(values);

// const enter = Object.entries(object1);
// console.log(enter);
// console.log(object1.hasOwnProperty("mohammad"));
// // level one
// //1th
// let dog1 = {};
// //2th
// console.log(dog1);
// //3th
// dog1 = {
//   name: "fuu",
//   legs: "four",
//   color: "white",
//   age: 12,
//   bark: function () {
//     return "woof woof";
//   },
// };
// console.log(dog1);
// let keys = Object.keys(dog1);
// console.log(keys);
// dog1.breed = "bad";
// dog1.getDogInfo = "very bad dog in the world";
// console.log(dog1);
//level2
// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",

//       "vvv",
//       "ll",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };
// console.log(users);
// let objectar = Object.entries(users);
// console.log(objectar);
// let max = objectar[0];

// for (let i = 1; i < objectar.length; i++) {
//   if (max[1].skills.length < objectar[i][1].skills.length) {
//     max = objectar[i];
//   }
// }

// console.log(max);
// //
// let savepoint = [];
// let point = objectar[0];
// for (let i = 1; i < objectar.length; i++) {
//   if (objectar[i][1].points == 50) {
//     savepoint.push(objectar[i]);
//   }
// }

// console.log(savepoint);
// //3th
// let mernstack = [];
// for (let i = 1; i < objectar.length; i++) {
//   if (
//     objectar[i][1].skills.includes("MongoDB" && "Express" && "React" && "Node")
//   ) {
//     mernstack.push(objectar[i]);
//   }
// }
// console.log(mernstack);
// // == "MongoDB" && "Express" && "React" && "Node"
// //4th
// objectar.push([
//   "mohammad",
//   {
//     email: "kli868590@gmail.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",

//       "vvv",
//       "ll",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// ]);
// console.log(objectar);
// //5th
// let keyss = Object.keys(users);
// console.log(keyss);
// //6th
// let valuess = Object.values(users);
// console.log(valuess);
// //==========================================level3================================================//
// //1th
// const personaccoun = {
//   firstname: "mohammmad",
//   lastName: "amiri",
//   incomes: [34, 56, 37, 26, 87],
//   expenses: [32, 65, 3, 6, 7],
//   totalincome: function () {
//     let totalincomee = 0;
//     for (let ff of this.incomes) {
//       totalincomee += ff;
//     }
//     return totalincomee;
//   },
//   totalexpenses: function () {
//     let totalincomee = 0;
//     for (let ff of this.expenses) {
//       totalincomee += ff;
//     }
//     return totalincomee;
//   },
//   accountinfo: function () {
//     return `the account name is ${this.firstname} and last name is ${
//       this.lastName
//     }
//     your  blance is ${this.accountblance()} your income is ${this.totalincome()}
//     and your expenses is ${this.totalexpenses()}`;
//   },
//   addincome: function (income) {
//     return this.incomes.push(income);
//   },
//   addexpenses: function (expense) {
//     return this.expenses.push(expense);
//   },
//   accountblance: function () {
//     return this.totalincome() - this.totalexpenses();
//   },
// };
// console.log(personaccoun.addexpenses(23));
// console.log(personaccoun);
// console.log(personaccoun.totalincome());
// console.log(personaccoun.totalexpenses());
// console.log(personaccoun.accountblance());
// console.log(personaccoun.accountinfo());

//2th
const userss = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
function sinup(usernam) {
  for (let i = 1; i < userss.length; i++) {
    if (usernam == userss[i].username) {
      console.log("user exixt try egain");
    } else {
    }
  }
}
sinup("Asa");
console.log(userss);
