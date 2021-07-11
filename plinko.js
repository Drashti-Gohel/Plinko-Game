class Plinko{
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r,{isStatic:true});
        World.add(world,this.body);
        this.r=r;
    }
    display(){
        
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,10);
    }
}