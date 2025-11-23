const fs = require("fs");

fs.writeFileSync("./output/app.log","Application Started\n");
console.log("File Created");

const logEntry1 = `${new Date().toISOString()} user logged in\n`;
fs.appendFileSync("./output/app.log",logEntry1);
console.log("Done :",logEntry1);

const logEntry2 = `${new Date().toISOString()} Data Fetched`;
fs.appendFileSync("./output/app.log",logEntry2);
console.log("Done :",logEntry2);