class Particle{
    constructor(x,y,radius){
      var options = {
          'isStatic': false,
          'restitution': 0.5,
          'friction': 0.5,
          'density': 0.5,
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