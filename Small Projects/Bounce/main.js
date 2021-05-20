// setup canvas
//This script gets a reference to the <canvas> element, then calls the getContext() method on it
// to give us a context on which we can start to draw. The resulting constant (ctx) is the object 
// that directly represents the drawing area of the canvas and allows us to draw 2D shapes on it.//
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth; //equaling the w & h of the browser viewport 
const height = canvas.height = window.innerHeight;//using window.innerWidth/innerHeight

// function to generate random number
//This function takes two numbers as arguments, and returns a random number in the range between the two.

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

//modelling the ball (x&y coordinates, horizontal&vertical velocity, color and size(radius in pixels))

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}


//drawing the ball  method
// Using this function, we can tell the ball to draw itself onto the screen,
// by calling a series of members of the 2D canvas context we defined earlier (ctx).
Ball.prototype.draw = function() {
  ctx.beginPath(); // to state that we want to draw a shape on the paper
  ctx.fillStyle =this.color;  // to define what color we want the shape to be
  ctx.arc(this.x,this.y, this.size, 0,2*Math.PI);  //method to trace an arc shape on the paper with properties.   
  ctx.fill(); //fill method  states "finish drawing the path we started with beginPath(), and fill the area it takes up with the color we specified earlier in fillStyle.
};


//The first four parts of the function check whether the ball has reached the edge of the canvas.
//If it has, we reverse the polarity of the relevant velocity to make the ball travel in the opposite direction. 
//So for example, if the ball was traveling upwards (positive velY), then the vertical velocity
// is changed so that it starts to travel downwards instead (negative velY).

// In the four cases, we are checking to see:
// if the x coordinate is greater than the width of the canvas (the ball is going off the right edge).
// if the x coordinate is smaller than 0 (the ball is going off the left edge).
// if the y coordinate is greater than the height of the canvas (the ball is going off the bottom edge).
// if the y coordinate is smaller than 0 (the ball is going off the top edge).

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

// define ball collision detection

Ball.prototype.collisionDetect = function() {
  for(let j = 0; j < balls.length; j++) {
    if(!(this === balls[j])) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
      }
    }
  }
};

// define array to store balls and populate it

let balls = [];

while(balls.length < 25) {
  const size = random(10,20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the adge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );
  balls.push(ball);
}

// define loop that keeps drawing the scene constantly

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  for(let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();