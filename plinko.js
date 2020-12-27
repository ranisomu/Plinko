class Plinko{
    constructor(x,y,radius){
      var options = {
          'isStatic': true,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world,this.body);
    }
    display(){
      var pos= this.body.position;
      var angle= this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      circle(pos.x,pos.y,this.body.radius);
      pop();
    }
}