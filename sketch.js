const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1,block2;
var ground;

function preload() {
   backgroundImg = loadImage("sprites/bg.png");
   

}
function setup() {
var canvas = createCanvas(3000,400);

    engine = Engine.create();
    world = engine.world;
    
    block1 = new Block(550,260,200,40);
    block2 = new Block(300,330,200,40);
    lava = new Water(1600,420,2340,250);
    ground = new Ground(1200,height,3800,50);
   
}

function draw() {
    background(backgroundImg);
    

    Engine.update(engine);
    
    block1.display();
    block2.display();
    lava.display();
    ground.display();
}