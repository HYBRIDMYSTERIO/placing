const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world ,box_2, box_1, ground, pig, log,box_3,box_4,pig_2,log_2,bird;


function setup() {
  var canvas = createCanvas(1200,400);

  

  engine = Engine.create();
  world = engine.world;
  box_2 = new Box(810,300,70,70);
  box_1 = new Box(1000,300,70,70);
  box_3 = new Box(810,200,70,70);
  box_4 = new Box(1000,200,70,70);
  ground = new Ground(600,390,1200,30);
  pig = new Pig(900,300);
  log = new Log(900,260,265,PI/2);
  pig_2 = new Pig(900,100);
  log_2 = new Log(900,30,265,PI/2);
  bird = new Bird(200,200,50,50);


  
  
}

function draw() {
  background("black");
  Engine.update(engine);
  box_2.displayboxes();
  box_1.displayboxes();
  box_3.displayboxes();
  box_4.displayboxes();
  ground.displayground();
  pig.displaypigs();
  log.displaylogs();
  pig_2.displaypigs();
  log_2.displaylogs();
  bird.displaybirds();
  
  
}