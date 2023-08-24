let a = 10;
a = 100;
console.log(a);
const n = 9;
// n=100;
console.log(n);
var names = "kaviya";
names = "geetha";
console.log(names);
// let na=[90,2,4,5,6];
// let na=[12,3,4,9];

let first = 4;
let sec = 2;
let res = first << sec;
// 0011 --->0110
// 0100  ---> 0000
console.log(res);

let groups = "Kaviya is a ambitious girl Kaviya";
let r = groups.slice(9, 6);
console.log(r + " yes");

r = groups.replace(/kaviya/i, "Kavii");
console.log(r);

r = groups.replace(/Kaviya/g, "Kaviiiiii");
console.log(r);

let nums = 100092;
let last = nums.toString();
console.log(typeof last, last);
let last1 = (90.990408086478).toFixed(3);
console.log(typeof last1, last1);

let arrays = [8, 9, 6, 5];
console.log(arrays.reverse());
console.log(arrays.sort());

arrays = ["kaviya", "ramu", "seetha", "vinay", "Amit", "Banana"];
// arrays=arrays.sort();
arrays = arrays.sort(function (a, b) {
  return a - b;
});
console.log(arrays);
