const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand;
var polygon;
var polygon_img;
var myConstaraint;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);

  ground = new Ground(400,380,800,20);
  stand = new Ground(560,265,200,10);
  
  polygon = new Bodies.circle(50,200,40);
  World.add(world,polygon);

  //first level
  Block1 = new Box(500, 250, 20, 20);
  Block2 = new Box(520, 250, 20, 20);
  Block3 = new Box(540, 250, 20, 20);
  Block4 = new Box(560, 250, 20, 20);
  Block5 = new Box(580, 250, 20, 20);
  Block6 = new Box(600, 250, 20, 20);
  Block7 = new Box(620, 250, 20, 20);
  
  //second level
  Block8 = new Box(520, 230, 20, 20);
  Block9 = new Box(540, 230, 20, 20);
  Block10 = new Box(560, 230, 20, 20);
  Block11 = new Box(580, 230, 20, 20);
  Block12 = new Box(600, 230, 20, 20);
  
  //third level
  Block13 = new Box(540, 210, 20, 20);
  Block14 = new Box(560, 210, 20, 20);
  Block15 = new Box(580, 210, 20, 20);

  myConstraint = new SlingShot(polygon,{x:120,y:200});

  //createSprite(400, 200, 50, 50);
}

function draw() {

  background(0,0,0);  

  Engine.update(engine);

  ground.display();
  stand.display();

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();
  Block10.display();
  Block11.display();
  Block12.display();
  Block13.display();
  Block14.display();
  Block15.display();

  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon,{ x: mouseX, y: mouseY })
}

function mouseReleased(){
  myConstraint.fly();
}