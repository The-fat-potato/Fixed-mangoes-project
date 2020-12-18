
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var TreeObj, stoneObj,GroundObject, launcherObject;
var Mango1,Mango2,Mango3,Mango4,Mango5,Mango6,Mango7,Mango8,Mango9,Mango10,Mango11,Mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new Stone(235,420,30); 

	Mango1=new Mango(1100,100,30);
  Mango2=new Mango(1170,130,30);
	Mango3=new Mango(1010,140,30);
	Mango4=new Mango(1000,70,30);
	Mango5=new Mango(1100,70,30);
	Mango6=new Mango(1000,230,30);
	Mango7=new Mango(900,230,40);
	Mango8=new Mango(1140,150,40);
	Mango9=new Mango(1100,230,40);
	Mango10=new Mango(1200,200,40);
	Mango11=new Mango(1120,50,40);
	Mango12=new Mango(900,160,40);

	TreeObj=new Tree(1050,580);
	GroundObject=new Ground(width/2,600,width,20);
	launcherObject=new Rope(stoneObj.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  //Engine.update(engine)
  

  TreeObj.display();
  stoneObj.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();
  Mango9.display();
  Mango10.display();
  Mango11.display();
  Mango12.display();
  stoneObj.display();

  GroundObject.display();
  launcherObject.display();
  detectcollision(stoneObj,Mango1);
  detectcollision(stoneObj,Mango2);
  detectcollision(stoneObj,Mango3);
  detectcollision(stoneObj,Mango4);
  detectcollision(stoneObj,Mango5);
  detectcollision(stoneObj,Mango6);
  detectcollision(stoneObj,Mango7);
  detectcollision(stoneObj,Mango8);
  detectcollision(stoneObj,Mango9);
  detectcollision(stoneObj,Mango10);
  detectcollision(stoneObj,Mango11);
  detectcollision(stoneObj,Mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,Mango1.x,Mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectcollision(lstone,lMango){
	
  MangoBodyPosition=lMango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
  	if(distance<=lMango.r+lstone.r)
    {  
  	  Matter.Body.setStatic(lMango.body,{isStatic:false});
    }

  }