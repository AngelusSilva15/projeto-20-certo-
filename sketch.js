const Engine = Matter.Engine;
const World = Matter.World;
blok_options = {}
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }
ball2 = Bodies.circle(300,10,20,ball_options);
World.add(world,ball2);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  ground2 = Bodies.rectangle(300,250,100,20,ground_options);
  World.add(world,ground2);

  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.run(engine);
 ellipse(ball2.position.x,ball2.position.y,20);
 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 rect(ground2.position.x,ground2.position.y,100,20)
}

