var snake;
var scl = 20;


function setup() {
  createCanvas(500, 400);
  snake = new Snake();
  food = new Food();
  
}

class Snake {
  constructor() {
    this.x = width / 1;
    this.y = height / 1;
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 1;
    this.tail = [];
  }

  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

   update(x, y) {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  
  
  draw() {

    if (xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
    if (ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
    fill("yellow");
    rect(this.x, this.y, 20, 20);
  }
}

function keyPressed(x, y) {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
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

  if (frameCount % 200 == 0) {
    console.log("new!");
    foods.push(new Food());
    if (foods.length > 1) {
      foods.splice(0, 1);
    }
  }

  fill(0);

  foods.forEach((f) => {
    f.draw();
   
  });

  snake.draw();
  text("SNAKE GAME", width / 2, 50);
  
  
  
  textSize(20);
  text('SCORE: ',width-100,height-50);
  text(this.snake.total-1, width-50, height-20);
  
  
}

 