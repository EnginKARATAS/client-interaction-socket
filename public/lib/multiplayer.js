var socket = io();
socket.on('message', message=>{
    console.log(message);
  })
  
  socket.on("dot",data=>{
    console.log("respond");
    console.log(data);
    
  })
  