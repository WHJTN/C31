class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
        this.SlingShot1 = loadImage ("sprites/sling1.png")
        this.SlingShot2 = loadImage ("sprites/sling2.png")
        this.SlingShot3 = loadImage ("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.SlingShot1, 200,85,35,135)
        image (this.SlingShot2, 177,85,35,80)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke ("rgb(84, 39, 15)")
            if (pointA.x > 200){
                line(pointA.x + 15, pointA.y , pointB.x - 5, pointB.y + 10);
                line(pointA.x + 15, pointA.y , pointB.x + 20, pointB.y + 10);
                image (this.SlingShot3,pointA.x + 20, pointA.y - 7, 10,20)
            }
            else {
                line(pointA.x - 15, pointA.y , pointB.x - 5, pointB.y + 10);
                line(pointA.x - 15, pointA.y , pointB.x + 20, pointB.y + 10);
                image (this.SlingShot3,pointA.x - 20, pointA.y - 7, 10,20)
            }
        }
    }
    
}