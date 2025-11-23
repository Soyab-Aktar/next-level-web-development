const fs = require("fs");
fs.writeFileSync("./output/temp.txt","this is a  Temp File");
console.log("Temp File Created");

if(fs.existsSync("./output/temp.txt")){
  console.log("File Exist!!!");
  fs.unlinkSync("./output/temp.txt");
  console.log("File Deleted");
}