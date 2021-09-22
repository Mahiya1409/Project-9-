var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-2.png")


}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addAnimation("running",seaImg);
  sea.scale=0.5;
  sea.velocityX=-1

  
  ship = createSprite(50,200,20,50);
  ship.addAnimation("running",shipImg1);
  ship.scale =0.25;
  edges= createEdgeSprites()

  ship.x=90
  ship.y=300
  
}

function draw() {
  background(0);

  if (keyDown("enter")) {
    ship.velocityX=5
    }

    if (keyDown("Left")) {
      ship.velocityX= -5
      }

      if (keyDown("Space")) {
        ship.velocityX= 0
         }

         if (sea.x < 0) {
           sea.x= sea.width/2
           
         }

         ship.collide (edges[3])
  


  
    
  drawSprites();
}
