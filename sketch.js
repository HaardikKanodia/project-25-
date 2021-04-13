
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObject;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	PaperObject = new paper(100,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  PaperObject.display();
  

}


function  keyPressed() {
 if (keyCode=== UP_ARROW) {

Matter.Body.applyforce(paperObject.body,paperObject.body.position,{x:130,y:-145})
 }
}

