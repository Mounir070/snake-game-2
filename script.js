function setup() {
	createCanvas(500, 400);
  frameRate(10);
}

var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function draw() {
	background(100);
	
	fill(0);
	
	fill(0, 255, 0);
	rect(xpos, ypos, 25, 25);
	
	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
}

