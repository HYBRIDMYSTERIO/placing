class Bird {
    constructor(x,y){
        var option = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.5

        }
        this.body = Bodies.rectangle(x,y,60,50,option);
        this.height = 60;
        this.width = 50;

        World.add(world,this.body);

    }
 displaybirds(){
     var position = this.body.position;
     position.x = mouseX;
     position.y = mouseY;
     var angle = this.body.angle;
     
     push();
     translate(position.x,position.y);
     rotate(angle);
     rectMode(CENTER);
     fill("red");
     stroke("white");
     strokeWeight(2);
     rect(0,0,this.width,this.height);
     pop();
 }
}