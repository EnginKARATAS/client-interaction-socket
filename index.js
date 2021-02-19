const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
http.listen(3000, () => {
  console.log('listening on *:3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log("connection id : " + socket.id);

  socket.on('join', function (room) {
    console.log("join " + room);
    io.emit("join", room);
    socket.join(room);
  });

  socket.on("deneme", (data) => {
    console.log("object");
    console.log(data);

  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
    //send message to room1  

  })




});

