class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

collides(otherRectangle){
    if(this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width && 
    this.topLeftXPos + this.width > otherRectangle.topLeftXPos && 
    this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length && 
    this.topLeftYPos + this.length > otherRectangle.topLeftYPos)  {
        return true;
     }
     else {
        return false;
     }
    }
}


let RectangleA = new Rectangle(2, 2, 6, 2);
let RectangleB = new Rectangle(3, 2, 4, 4);

console.log(RectangleA.collides(RectangleB));