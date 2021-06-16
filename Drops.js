class Drops{
    constructor(x,y){
        var options = {
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.body);

       
    }
    display(){
        
        fill("blue");
        ellipseMode(radius);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        
        
        
    }

    updateY(){
        if(this.drops.position.y > height){
            Matter.body.setPosition(this.drop, {x:random(0,400), y:random(0,400)})   
           }
    }
}