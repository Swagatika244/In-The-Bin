
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ball_options
var ballImg
var base
var ground, groundImg, ground1
var wall1,wall2,wall3

function preload()
{
	ballImg = loadImage('paperBall.png');
	groundImg = loadImage('wood.png');

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(0);
	fill(rgb(101,67,33));
	engine = Engine.create();
	world = engine.world;

	var ball_options ={
		//isStatic:true,
		restitution:0.3,
		frictionAir:0.01,
		friction:0,
		density:1.2
	}
	var opt={
		isStatic:true
	}

	ball = Bodies.circle(width/4.5,100,40,ball_options);
    World.add(world,ball);
	
	//ground =new Ground(width/2,height-100,width,20);

	ground1 =Bodies.rectangle(width/2,height-80,width,20,opt);
	World.add(world,ground1);

	left = new Ground(width/2+250,height-150,10,100);
	right = new Ground(width/2+350,height-150,10,100);
	wall1=new Ground(0,height/2,20,height);
	wall2=new Ground(width,height/2,20,height);
	wall3=new Ground(width/2,0,width,20);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER)
  background(rgb(170,238,255));
  Engine.update(engine);

  image(ballImg,ball.position.x,ball.position.y,40,40);
  image(groundImg,ground1.position.x,ground1.position.y,width,300);

  //image(groundImg,ground.position.x,ground.position.y,width,40);

  //ground.display();
  left.display();
  right.display();
  wall1.display();
  wall2.display();
  wall3.display();

  if(keyDown("UP_Arrow")){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:-80});
  }

  drawSprites();
  textSize(40);
  text("Put the crumpled paper inside the bin",width/3.6,100);
  text("Use 'UP' arrow",width/2.5,150);


}




