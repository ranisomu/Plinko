const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var particle1;
var plinko1;
var division1;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  particle1= new Particle();
  plinko1= new Plinko();
  division1= new Division();
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  particle1.display();
  plinko1.display();
  division1.display();
  drawSprites();
}