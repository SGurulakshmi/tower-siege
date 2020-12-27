const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var ground
var spring
var ball
    
    function setup()
    {
      createCanvas(800,600)
      engine = Engine.create();
      World = engine.world;

          ground = new Ground(500,500,10,500)
          
          block1 = new RedBox(500,360,30,40)
          block2 = new RedBox(520,360,30,40)
          block3 = new RedBox(540,360,30,40)
          block4 = new RedBox(560,360,30,40)
          block5 = new RedBox(580,360,30,40)
          block6 = new RedBox(600,360,30,40)

          block7 = new BlueBox(510,330,30,40)
          block8 = new BlueBox(530,330,30,40)
          block9 = new BlueBox(550,330,30,40)
          block10= new BlueBox(570,330,30,40)
          block11= new BlueBox(590,330,30,40)

          block12 = new PinkBox(520,310,30,40)
          block13 = new PinkBox(540,310,30,40)
          block14 = new PinkBox(560,310,30,40)
          block15 = new PinkBox(580,310,30,40)

          block16 = new YellowBox(530,280,30,40)
          block17 = new YellowBox(550,280,30,40)
          block18 = new YellowBox(570,280,30,40)
          
          block19 = new GreenBox(540,250,30,40)
          block20 = new GreenBox(560,250,30,40)

          block21 = new BrownBox(550,220,30,40)
          
          block22= new PinkBox(520,75,30,40)
          block23 = new PinkBox(540,75,30,40)
          block24= new PinkBox(560,75,30,40)
          block25 = new PinkBox(580,75,30,40)

          block26 = new YellowBox(530,45,30,40)
          block27 = new YellowBox(550,45,30,40)
          block28 = new YellowBox(570,45,30,40)
          
          ball = new Ball(50,50,100,100);

          spring = new String(ball.body,{x:200,y:200})
           
          
         
 
        Engine.update(engine)
    }

    function draw()
    {
       background("yellow") 
             
       ground.display();
       block1.display();
       block2.display();
       block3.display();
       block4.display();
       block5.display();
       block5.display();
       block6.display();
       block7.display();
       block8.display();
       block9.display();
       block10.display();
       block11.display();
       block12.display();
       block13.display();
       block15.display();
       block16.display();
       block17.display();
       block18.display();
       block19.display();
       block20.display();
       block21.display();
       block22.display();
       block23.display();
       block24.display();
       block25.display();
       block26.display();
       block27.display();
       block28.display();
       spring.display();
       
       ball.display();

    }

    function mouseDragged(){
        Matter.body.setPosition(ball.boy,{x:mouseX,y:mouseY})
    }

    function mouseReleased(){
        spring.released();
    }