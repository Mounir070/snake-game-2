function setup() {
	createCanvas(500, 400);
  frameRate(10);
}

var [xpos, ypos, xspeed, yspeed] = [160, 160, 0, 0];

function draw() {
	background(110);
	
	fill(0);
	
	fill(220 ,0 , 0);
	rect(xpos, ypos, 20, 20);
	
	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
}

