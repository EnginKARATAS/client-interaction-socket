let dots = [];
let dot;

// Keep track of our socket connection

function preload(){
  socket = io.connect('http://localhost:3000');
  socket.emit('join', room);
  
  //add to dots, opened client(user)
  dot = new Dot();
  
  // Start a socket connection to the server
  console.log("dot");
  socket.emit('add_user',"dot");

}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(200, 222, 20);

  socket.emit('tick',()=>{
  })

  for (let i = 0; i < dots.length; i++) {
    dots[i].show();
  }
}

function mouseDragged() {
  // Draw some white circles
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);

}