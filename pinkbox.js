class PinkBox extends Box{
    constructor(x,y){
        super(x,y,20,20)
    }
    display(){
        fill("pink")
        super.display();
    }
}