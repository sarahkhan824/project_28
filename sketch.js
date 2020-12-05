
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy, mango;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  boy = new Boy(200,200,200,200)
  //mango = new Mango(200,200)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //boy.display();
  boy.display();
  drawSprites
  Engine.update(engine);
 
}



