// creamos unas constantes para el mundo
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  // De limitamos el area y actualizamos al mundo 
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;
  // creamos el suelo 

  ballprs = new Ball(100,400,15);
  Slingshots = new Slingshot(ballprs.body,{x:400,y:400});

    //piso 1
    cub1 = new Box(900,100,70,70);
    cub2 = new Box(900,200,70,70);
    cub3 = new Box(900,300,70,70);
    cub4 = new Box(900,400,70,70);
    cub5 = new Box(900,500,70,70);
    cub6 = new Box(900,600,70,70);
    cub7 = new Box(900,700,70,70);
  //piso 2
    cub12 = new Box(970,100,70,70);
    cub22 = new Box(970,200,70,70);
    cub32 = new Box(970,300,70,70);
    cub42 = new Box(970,400,70,70);
    cub52 = new Box(970,500,70,70);
    cub62 = new Box(970,600,70,70);
    cub72 = new Box(970,700,70,70);
  //piso 3 
    cub13 = new Box(1030,100,70,70);
    cub23 = new Box(1030,200,70,70);
    cub33 = new Box(1030,300,70,70);
    cub43 = new Box(1030,400,70,70);
    cub53 = new Box(1030,500,70,70);
    cub63 = new Box(1030,600,70,70);
    cub73 = new Box(1030,700,70,70);
//piso 4
    cub14 = new Box(1100,100,70,70);
    cub24 = new Box(1100,200,70,70);
    cub34 = new Box(1100,300,70,70);
    cub44 = new Box(1100,400,70,70);
    cub54 = new Box(1100,500,70,70);
    cub64 = new Box(1100,600,70,70);
    cub74 = new Box(1100,700,70,70);

  ground = new Ground(width/2,height,width,30);  
  ground2 = new Ground(width/2,0,width,30);  
  ground3 = new Ground(0,200,30,1400);  
  ground4 = new Ground(1910,200,30,1400);  
}

function draw() {
  background("green");
  Engine.update(engine);

  fill("brown");
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  Slingshots.display();
  ballprs.display();

  cub1.display();
  cub2.display();
  cub3.display();
  cub4.display();
  cub5.display();
  cub6.display();
  cub7.display();

  cub12.display();
  cub22.display();
  cub32.display();
  cub42.display();
  cub52.display();
  cub62.display();
  cub72.display();

  cub13.display();
  cub23.display();
  cub33.display();
  cub43.display();
  cub53.display();
  cub63.display();
  cub73.display();

  cub14.display();
  cub24.display();
  cub34.display();
  cub44.display();
  cub54.display();
  cub64.display();
  cub74.display();

textSize(110);
fill("white");
text("EL TUMBA TORRES!!!",450,100);

}
function mouseDragged(){
  Matter.Body.setPosition(ballprs.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  Slingshots.fly();
}

function keyPressed(){
  if(keyCode===32){
    Slingshots.attach();
  }
}