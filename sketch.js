var  wall, thickness;
var  bullet, speed, weight; 

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);  
  thickness = random(22,83);

  bullet = createSprite(50, 200, 30, 10);
  car.velocityX = speed;

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = color(80,80,80);
}

function draw() {

  if(wall.x-bullet.x < bullet.width/2 + wall.width/2){
    bullet.velocityX = 0;
    bullet.x = 1155;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation > 10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }


  background(0,0,0);  
  
  drawSprites();
}