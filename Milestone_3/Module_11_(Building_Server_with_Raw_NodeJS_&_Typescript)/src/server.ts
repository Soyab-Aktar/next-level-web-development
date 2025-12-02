import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";

const server:Server = http.createServer((req:IncomingMessage,res:ServerResponse) =>{
  console.log("Server is Running...");
  // ==> Root GET Request
  if(req.url == "/" && req.method == "GET"){
    res.writeHead(200, {"content-type" : "application/json"});
    res.end(JSON.stringify(
      {
        message:"Hello i am creating a server with NodeJs",
        path: req.url,
      }
    ))
  }
  // ==> "/api" GET request
  if(req.url == "/api" && req.method == "GET"){
    res.writeHead(200, {"content-type" : "application/json"});
    res.end(JSON.stringify(
      {
        message:"Current Route is: '/api' & Server Health Status: ok",
        path: req.url,
      }
    ))
  }
  // ==> "/api/users" POST Request
  if(req.url == "/api/users" && req.method == "POST"){
    // const user:Object = {
    //   id: 1,
    //   name: "Soyab Aktar",
    //   course:"BCA",
    // }
    // res.writeHead(200, {"content-type" : "application/json"});
    // res.end(JSON.stringify(user));

    let body = '';
    req.on("data",chunk =>{
      body += chunk.toString();
    });
    req.on("end", ()=>{
      try{
      const parseBody = JSON.parse(body);
      console.log(body);
      res.end(JSON.stringify(parseBody));
      }catch(err:any){
        console.error(err?.message);
      }
    })
  }

});

server.listen(config.port, ()=>{
  console.log(`Server is running on port ${config.port}`);
})