<<<<<<< HEAD
function preload(){
 
  

}

function setup() {
 
=======
let dots = [];
let user;

// Keep track of our socket connection

function setup() {
  createCanvas(400, 400);
  // Start a socket connection to the server
  socket = io.connect('http://localhost:3000');
  socket.emit('join',room);
  
>>>>>>> parent of 9b7e3ae (last commit 20.02.2021. I will look again tomorrow)

}

function draw() {
  background(200, 222, 20);
<<<<<<< HEAD


  for (let i = 0; i < dots.length; i++) {
    dots[i].show();
  }
=======
>>>>>>> parent of 9b7e3ae (last commit 20.02.2021. I will look again tomorrow)
}

 