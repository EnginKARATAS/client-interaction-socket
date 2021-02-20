let dots = [];
let user;

// Keep track of our socket connection

function setup() {
  createCanvas(400, 400);
  // Start a socket connection to the server
  socket = io.connect('http://localhost:3000');
  socket.emit('join',room);
  

}

function draw() {
  background(200, 222, 20);
}

function mouseDragged() {
  // Draw some white circles
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);

}