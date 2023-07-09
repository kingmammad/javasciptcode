const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
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
setloop.delete(3)
console.log(setloop)
//4th
setloop.clear()
