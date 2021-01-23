const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisions =[];
var divisionHeight = 300
var plinkos=[]

function setup() {
  createCanvas(480,800);
  

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,height,480,20);

  for(var i = 0; i <=width;i = i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight))
  }

  
  for(var i = 75; i <=width;i = i+50){
    plinkos.push(new Plinko(i,75));
  } 

  for(var i = 50; i <=width;i = i+50){
    plinkos.push(new Plinko(i,175));
  } 

  for(var i = 75; i <=width;i = i+50){
    plinkos.push(new Plinko(i,275));
  } 

  for(var i = 50; i <=width;i = i+50){
    plinkos.push(new Plinko(i,375));
  } 

    

  

}

function draw() {
  background(0);
  
  Engine.update(engine);
  ground.display();

  for(var i = 0; i <= divisions.length;i++){
    divisions[i].display();
  }

  for(var i = 0; i <= plinkos.length;i++){
    plinkos[i].display();
  }
  
}