var thickness,wall;
var bullet,speed,weight;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(23,83);
  car=createSprite(50,200,50,50);
  wall=createSprite(2500,200,thickness,height/2);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  
  //colors1();
  drawSprites();
  hasCollided();
}

function colors1() {
if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
bullet.velocityX-0;
vardeformation=0.5 * weight * speed* speed/22509;
if(deformation>180)
{
  bullet.shapeColor=color("brown");
}

if(deformation<180 && deformation>100)
 {
   bullet.shapeColor=color("green");
 } 
   
 if(deformation<100)
 {
      bullet.shapeColor=color("red");
 }
}
}

function hasCollided(Lbullet,Lwall) 
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;

}

if (hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);


if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}
  if(damge<10)
  {
    wall.shapeColor=color(0,255,0);
  }

}
