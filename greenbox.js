class GreenBox extends Box{
    constructor(x,y){
        super(x,y,30,40)
    }
    display(){
        fill("Green")
        super.display();
    }
}