class Ball {
    constructor(x,y){
        this.image = loadImage("polygon.png");
    }

    
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
}