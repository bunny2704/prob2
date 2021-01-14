const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState="onsling";
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;




function setup() {

  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  createSprite(400, 200, 50, 50);
  for(var k=0;k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
   // divisions.pop
  }
  
  for (var j =40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
      }
      for (var j =15; j <=width-10; j=j-50){
        plinkos.push(new Plinko(j,175));
          }
}

function draw() {
  background(0);
  Engine.update(engine);

  for (var k = 0; k < divisions.length; k++){

     divisions[k].display();
  }
  for (var j = 0; j < divisions.length; j++){

    plinkos[j].display();
 }
 
 


  drawSprites();
}