const x = require("./file1");
const {c : numberC} = require("./file3");
const {add, subs} = require("./utils/cal");
// const name = require("./file3");

console.log(x,numberC);
console.log(add(10,20));
console.log(subs(10,20));
