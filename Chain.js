class Chain {
    constructor (bird,log) {
        var option = {
        bodyA : bird,
        bodyB : log,
        stiffness : 0.04,
        length : 10,
        }

        this.chain = Constraint.create(option)
        World.add(world,this.chain)
    }
    display () {
     // Hi
     line(this.chain.bodyA.position.x,
        this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)

    }

}