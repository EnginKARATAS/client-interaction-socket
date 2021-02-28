//  const io = require('socket.io-client');

 let games = io.connect("http://localhost:3000/");

 games.on("welcome",(msg)=>{
   console.log(msg);
 })

 socket.on("error", (err) => {
   console.log(err);
 })

 socket.on("success",(success)=>{
   console.log(success);
 })