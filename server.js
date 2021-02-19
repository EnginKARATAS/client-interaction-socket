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
io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log("socket id : "+ socket.id);
  //when mouse message comes, socket.on('mouse',mouseMsg) working
  socket.on('mouse',mouseMsg)

  function mouseMsg(data){
    console.log(data);
    socket.broadcast.emit('mouse',data);
    //do can be useful for online pacman game?
    // io.socket.emit('mouse', data)
  }
}