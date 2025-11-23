const fs = require("fs");
const content1 = "This is a faltu sentence";
try{
  fs.writeFileSync("./output/test_sync.txt",content1);
  console.log("File Written Sync");
}catch(err){
  console.error(err.message);
}

const content2 = "this is for async operation, so chill and enjoy";
fs.writeFile("./output/test_Async.txt",content2, (err) =>{
  if(err){
    console.log(err.message);
  }
  else{
    console.log("File Writen by Asyn complete");
  }
});
