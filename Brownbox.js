class BrownBox extends Box{
    constructor(x,y){
        super(x,y,30,40) 
    }
    display(){
        fill("brown")
        super.display();
    }
}