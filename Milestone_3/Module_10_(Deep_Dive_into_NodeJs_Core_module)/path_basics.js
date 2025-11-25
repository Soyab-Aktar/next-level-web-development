const path = require("path");

console.log("Current file Path Info: ");
console.log("FileName: ",__filename);
console.log("Directory: ",__dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "./output/test_Async.txt";

console.log("Analyzing Path :", filePath, "\n");
console.log("Directory: ",path.dirname(filePath));
console.log("Base Name: ",path.basename(filePath));
console.log("File Extention: ",path.extname(filePath));
console.log("File Name: ",path.basename(filePath,path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log("Parsed Path Object: ",parsed);
