class Particle{
    constructor(x,y,radius){
    var options = {
        restitution:0.4,
        isStatic:false,
    }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.r=radius;
    }
    display(){
        push ();
        fill (this.color); 
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,10);
        pop ();
    }
}