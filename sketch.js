const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;
	bob1 = new Bob (400, 400, 35);
	bob2 = new Bob (435, 400, 35);
	bob3 = new Bob (470, 400, 35);
	bob4 = new Bob (505, 400, 35);
	bob5 = new Bob (540, 400, 35);
	//roof = new rooftop (500, 500, 10, 10);
	rope1 = new rope (bob1.body, {x:400, y:100});
	rope2 = new rope (bob2.body, {x: 435, y: 100});
	rope3 = new rope (bob3.body, {x:470, y:100});
	rope4 = new rope (bob4.body, {x:505, y:100});
	rope5 = new rope (bob5.body, {x:540, y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
 // roof.display();
  rope1.display();
 bob1.display();
 rope2.display();
 bob2.display();
 rope3.display();
 bob3.display();
 rope4.display();
 bob4.display();
 rope5.display();
 bob5.display();
}

function keyPressed ()	{

	if (keyCode == 32){

		Matter.Body.applyForce (bob1.body, bob1.body.position, {x: -30, y:-30});
	}

}


