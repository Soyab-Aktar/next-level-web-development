const fs = require("fs");
fs.writeFileSync("./output/temp.txt","this is a  Temp File");
console.log("Temp File Created");

if(fs.existsSync("./output/temp.txt")){
  console.log("File Exist!!!");
  fs.unlinkSync("./output/temp.txt");
  console.log("File Deleted");
}

try{
  fs.unlinkSync("./output/temp.txt");
}
catch(error){
  console.log("Error",error.message);
}

fs.writeFile("./output/temp2.txt","This is an another temp file so chill", (err) =>{
  if(err) return console.error(err.message);
  console.log("Another Temp File Created");
  fs.unlink("./output/temp2.txt",(err) =>{
    if(err) return console.error(err.message);
    console.log("File Deleted");
  });
})