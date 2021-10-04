var snake;
var scl = 20;


function setup() {
  createCanvas(500, 400);
  snake = new Snake();
  food = new Food();
}

class Snake {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  draw() {
    if (xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
    if (ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
  }
}

class Food {
  constructor() {
    this.x = random(width)
    this.y = random(height)
  }

  draw() {
    fill(220, 0, 0);
    rect(this.x, this.y, 20, 20);
  }
}

var [xpos, ypos, xspeed, yspeed] = [160, 160, 0, 0];

var foods = [];

function draw() {
  background(110);
 
  if(frameCount % 100 == 0){
    console.log("new!");
    foods.push(new Food());
    if(foods.length > 6){
      foods.splice(0,1);
    }
  }

  fill(0);

  foods.forEach((f) => {
    f.draw();
  });


}


