const express = require('express');
const app = express();
const port = 3000;
const http = require('http').createServer();
app.use(express.static('public'));
const io = require('socket.io')(http);

http.listen(port, () => {
  console.log("server listening " + port);
});

// io.on('connection',(socket)=>{
//   socket.emit('welcome',"Hello canım")

//   console.log("client connection");
// });

// const rooms = ["lol", "bf4", "csgo"]

// io
//   .of("/games")
//   .on('connection', (socket) => {
//     console.log("New Client Came" + socket.id.substring(5));
//     io.emit('welcome', "hello welcome to game area (game namespace)");

//     socket.on('joinRoom', (room) => {
//       if (rooms.includes(room)) {
//         socket.join(room)
//         socket.emit('success', "Welcome to room " + room)
//       }
//       else {
//         socket.emit('error', "There is no room about " + room)
//       }
//     });
//   })

