class Box {
    constructor(x,y,width,height){
        var option = {
            'restitution':0.8,
            'friction':0.3,
            'density':1

        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.height = height;
        this.width = width;

        World.add(world,this.body);

    }
 displayboxes(){
     var position = this.body.position;
     var angle = this.body.angle;
     
     push();
     translate(position.x,position.y);
     rotate(angle);
     rectMode(CENTER);
     fill("brown");
     stroke("white");
     strokeWeight(2);
     rect(0,0,this.width,this.height);
     pop();
 }
}

