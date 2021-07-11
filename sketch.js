const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var plinko = [];
var particle = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;

  ground = new Ground(400,790,800,20);

  for (var k=0; k<width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  for (var j=75 ; j<=width; j = j+50){
    plinko.push(new Plinko(j,75,10));
  }

  for (var j=50 ; j<=width-10; j = j+50){
    plinko.push(new Plinko(j,175,10));
  }

  for (var j=75 ; j<=width; j = j+50){
    plinko.push(new Plinko(j,275,10));
  }

  for (var j=50 ; j<=width-10; j = j+50){
    plinko.push(new Plinko(j,375,10));
  }

  Engine.run(engine);
}

function draw() {
  background(0); 
 
  drawSprites();

  ground.display();
  
  for (var n =0;n<divisions.length;n++){
    divisions[n].display();
  }

  if (frameCount % 60 === 0){
    particle.push(new Particle(random(20,780),10,10));
  }

  for (var h = 0;h<particle.length;h++){
    particle[h].display();
  }

  for (var j = 0; j<plinko.length;j++){
    plinko[j].display();
  }
  
}