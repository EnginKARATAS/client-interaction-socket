var socket = io();
var room = "abc123";


socket.on('tick_arr', sv_dots => {
  console.log("geliyor gelmekte olan");
  // dots.concat(sv_dots);
})

socket.on('message', (msg) => {
  console.log("msg");
})


