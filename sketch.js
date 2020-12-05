const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var ground;
var ball;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var option={
  isStatic:true
  }

  var ball_option={
  restitution:1
  }

  ground=Bodies.rectangle(400,380,800,25,option);
  World.add(world,ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

  ball=Bodies.circle(400,130,20,ball_option);
  World.add(world,ball);
}

function draw() {
  background('lightBlue');
  Engine.update(engine);
  rectMode(CENTER);
  fill('brown');
  rect(ground.position.x,ground.position.y,800,25);


  ellipseMode(RADIUS);
  fill('pink');
  ellipse(ball.position.x,ball.position.y,20,20);
}