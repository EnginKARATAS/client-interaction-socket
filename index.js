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
  
  socket.on('join_request',(room) => {
    console.log(socket.id + "client joined room" + room);
    socket.join(room)
  })
   


});

