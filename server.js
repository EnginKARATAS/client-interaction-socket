// Setup express web server and listen on port 3000
let express = require('express');
let app = express();
let port= Number(process.env.PORT || 3000);
let server = app.listen(port);

app.use(express.static('public'));
console.log("My socket server is running on port " + port);

// Start socket.io
let socket = require('socket.io');

// Connect it to the web server
let io = socket(server);

// Setup a connection
io.on('connection', newConnection);

function newConnection(socket) {
  console.log("socket id : "+ socket.id);

  socket.join('room1');
  socket.to('room1').emit('enter_to_room');

  function enter_to_room() {
    console.log("sending room1");
  }

  socket.emit("welcome","Welcome, your id:");
  //socket.emit -> one user
  //socket.brodcast.emit -> except user, all user
  //io.emit -> all users
  //socket.to('room1').emit('enter_to_room') -> send a event to a room
  socket.on('client_enter',(data)=>{
    io.emit('client_enter', data);
  });
  
  socket.on('disconnect', ()=>{
    io.emit('message','a user has left the chat');
  })
 
  socket.on('mouse',(data)=>{
    console.log(data);
    socket.broadcast.emit('mouse',data);
  })

}