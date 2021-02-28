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

<<<<<<< HEAD
//   console.log("client connection");
// });
=======
io.on('connection', (socket) => {

  socket.on('join', (room) => {
    console.log(socket.id + " client joined room " + room);
    socket.join(room)
  })

  //config disconnection
  socket.on('disconnect', () => {
    let msg = "a user disconnected "
    io.to('abc').emit('message', msg);
    dots.pop();
  })

});


// //send clients dot array once 
// io.to('abc123').emit('get_dot', dots);

// socket.on('join', (room) => {
//   console.log(socket.id + "client joined room" + room);
//   socket.join(room)
// })

// socket.on('user_moved', data => {
//   let msg = "user moved "
//   io.to('abc123').emit('message', msg);//send back to client if user in room
// })

// //kullanıcı emit yapmış
// socket.on('add_dot_init', Dot => {
//   let msg = "new Dot(user) come to server, adding array..."
//   dots.push(Dot);
>>>>>>> parent of 9b7e3ae (last commit 20.02.2021. I will look again tomorrow)

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

