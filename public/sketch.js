<<<<<<< HEAD
<<<<<<< HEAD
function preload(){
 
  

}
=======
let dots = [];
let user;

// Keep track of our socket connection
>>>>>>> parent of 9b7e3ae (last commit 20.02.2021. I will look again tomorrow)

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
  
<<<<<<< HEAD
>>>>>>> parent of 9b7e3ae (last commit 20.02.2021. I will look again tomorrow)
=======
>>>>>>> parent of 9b7e3ae (last commit 20.02.2021. I will look again tomorrow)

}

function draw() {
  background(200, 222, 20);
<<<<<<< HEAD
<<<<<<< HEAD


  for (let i = 0; i < dots.length; i++) {
    dots[i].show();
  }
=======
>>>>>>> parent of 9b7e3ae (last commit 20.02.2021. I will look again tomorrow)
=======
>>>>>>> parent of 9b7e3ae (last commit 20.02.2021. I will look again tomorrow)
}

 