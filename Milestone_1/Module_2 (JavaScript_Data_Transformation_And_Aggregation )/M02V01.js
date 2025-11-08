const obj = {};
const course1 = {name: "Programming Hero"};
const course2 = {name: "Next Level Web Devlopment"};

obj[course2] = {courseID: "Level 2"};
// obj["true"] = {courseID: "Level 1"};
obj[course1] = {courseID: "Level 1"};


// console.log(obj);

// Map
const map = new Map();
console.log(map);

map.set(course1, {courseID: "Level 1"});
map.set(course2, {courseID: "Level 2"});
// console.log(map);
// console.log(map.size) 
// console.log(map.has(course1));

// map.forEach((value,key) => console.log("Key :", key, "Value :",value));

map.forEach((value,key) => (key.name = "Hello Friends " + key.name));

// console.log(map);
// console.log(map.entries())

const course = [
    ["Programming Hero", "Level 1"],
    ["Next Level","level 2"],
];

const arrayMap = new Map(course);
console.log(arrayMap);
