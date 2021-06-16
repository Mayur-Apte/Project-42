const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drops = [];

function preload(){
   thunder1 = loadImage('images/thunderbolt/3.png');
   thunder2 = loadImage('images/thunderbolt/4.png'); 
}

function setup(){
    engine = Engine.create();
    world = engine.world
    createCanvas(400,800);
    
    
    Umbrella = new umbrella(200,700);


   
    
}

function draw(){
    Engine.update(engine);
    
    drops.display();  
    Umbrella.display();
    
    
    rand = Math.round(random(1,4))
    if(frameCount%80===0){
        thunderCreateFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
    }

    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)))
    }
    
    
}   

