class Box {
  constructor(x, y, width, height) {
      var options = {
          restitution: 0.1,
          friction: 0.01,
          density: 0.02
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }

  display() {   
      var pos = this.body.position;
      strokeWeight(2);
      fill("gray");
      rect(pos.x, pos.y, this.width, this.height);
  }
}
