class Pig {
    constructor(x,y){
        var option = {
            'restitution':0.8,
            'friction':0.3,
            'density':1

        }
        this.body = Bodies.rectangle(x,y,60,50,option);
        this.height = 60;
        this.width = 50;

        World.add(world,this.body);

    }
 displaypigs(){
     var position = this.body.position;
     var angle = this.body.angle;
     
     push();
     translate(position.x,position.y);
     rotate(angle);
     rectMode(CENTER);
     fill("green");
     stroke("white");
     strokeWeight(2);
     rect(0,0,this.width,this.height);
     pop();
 }
}
