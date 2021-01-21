class Circle {
    constructor (xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get surface(){
        return (Math.PI * this.radius * this.radius);
    }
    move(xOffset, yOffset) {
       this.xPos += xOffset
       this.yPos += yOffset
    }
}

let circ = new Circle(6,2,3);
console.log(circ);
circ.surface = 0;
console.log(circ.surface);
circ.move(3, 4);
console.log(circ);

