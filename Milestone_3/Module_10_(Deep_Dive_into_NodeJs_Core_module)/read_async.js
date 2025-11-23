const { error } = require("console");
const fs = require("fs");
console.log("Start Reading...");
fs.readFile("./data/diary.txt","utf-8",(error,data) =>{
  if(error){
    console.error("Error Happend :",error.message);
  }
  else{
    console.log("File Content :");
    console.log(data);
  }
});
console.log("This run immediately - no blocking");