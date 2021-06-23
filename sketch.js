
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbinObj;
var paper;

function preload()
{
 
 dustbinObj = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,200,90,90);

	ground = new Ground(200,600,3000,20);

    leftSide = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20);
	rightSide = new Dustbin(670,620,20,100);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);

  
  ground.display();
  paper.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  image(dustbinObj,530,530,200,150)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:600, y: -2300});
	}
}

