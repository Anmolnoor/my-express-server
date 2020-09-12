const exp = require("express");

const server = exp();

server.get("/",function(req, res){
  res.send("My Express Server is online bro");
});

server.get("/about",function(req,res){
  res.send("This is my about section.<br><h1>AnmolNoor</h1>")
});

server.listen(3000,function(){
  console.log("server started at 3000");
});
