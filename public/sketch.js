let dot;

// Keep track of our socket connection
var socket;

function setup() {
  createCanvas(400, 400);
  // Start a socket connection to the server
  socket = io.connect('http://localhost:3000');

  socket.on('mouse',
    // When we receive data
    function(data) {
      console.log("respond: " + data.y + " " + data.y);
      // Draw a blue circle
      fill(0,0,255);
      noStroke();
      ellipse(data.x, data.y, 20, 20);
    }
  );
  dot = new Dot();
  socket.emit("dot",dot);
}

function cagir(data){
  data.tyap = data.a
  console.log(data.tyap);
}

function draw() {
  background(200,222,20);
  dot.show();
}

function mouseDragged() {
  // Draw some white circles
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,20,20);

  console.log("sendmouse: " + mouseX + " " + mouseY);
  
  var data = {
    x: mouseX,
    y: mouseY
  };
  //I am a emmitter, and I am seperating all of my "data"
  socket.emit('mouse',data);

}