class ground {
    constructor(){
        var options={
            isStatic: true
        }
        this.body=Bodies.rectangle(200, 380, 400,20, options);
        World.add(world,this.body);
        }
display(){
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, 400, 20);
}
}
