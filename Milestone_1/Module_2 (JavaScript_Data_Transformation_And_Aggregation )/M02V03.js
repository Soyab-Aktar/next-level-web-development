// Sort
const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];
// const sortedNumber = numbers.sort((a,b) => (a-b));
// console.log(sortedNumber);
// fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits);

// Nested array flat
const arr = [1,2,3,[4,5]];
const arr2 = [1,2,3,[4,5,[6,7]]];
const flatArr = arr.flat();
const flatArr2 = arr2.flat(2);
// console.log(flatArr);
// console.log(flatArr2);
const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];
const filterPost = [...new Set(tagsFromPosts.flat())];
// console.log(filterPost);

// Some
const nums = [1, 2, 3, 7, 5];
const hasEvenNumber = nums.some((num) => num%2 ===0);
// console.log(hasEvenNumber);

const currentUserRoles = ["user", "editor", "admin"];
const featureAccessRoles = ["admin", "manager"];
const canAccess = currentUserRoles.some((role) => featureAccessRoles.includes(role));
// console.log(canAccess);


// Array.from()
const arr3 = Array.from([1, 2, 3], (value, i) => value * value);

const range = (start, stop, step) => Array.from({length:Math.ceil((stop -start)/ step)}, (_,i) => start + i *step);
console.log(range(1,11,1)) 
