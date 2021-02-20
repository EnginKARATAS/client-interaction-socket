let dots = [];

let express = require('express');
let app = express();
let port = Number(process.env.PORT || 3000);
let server = app.listen(port);

app.use(express.static('public'));
console.log("My socket server is running on port " + port);
// Start socket.io
let socket = require('socket.io');
// Connect it to the web server
let io = socket(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {

  //send users
  socket.on('tick', () =>{
    io.to('abc123').emit('tick_arr',dots)
  })

  //user join
  socket.on('join', (room) => {
    console.log(socket.id + " client joined room " + room);
    socket.join(room)
  })

  socket.on('add_user',Dot =>{
    console.log(dot);
    dots.push(Dot);
  })

  // socket.on('get_users',() =>{
    
  //   //assignment to client dots
  //    io.to('abc123').emit('res_assignment_array', dots);//send back to client if user in room

  // })

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

//   //send back to client if user in room
//   io.sockets.in('abc123').emit('message', msg);

//   //kullanıcıya gönder
//   // socket.emit('get_dot_init', dots)
//   io.sockets.in('abc123').emit('get_dot_init', dots);
// });
