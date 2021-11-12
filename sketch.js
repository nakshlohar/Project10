var seaImage, shipImage
var sea, ship


function preload(){
  shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  sea = createSprite(400,200);
  sea.addImage(seaImage)
  sea.velocityX = -5
  sea.scale = 0.3;

  ship = createSprite(120,200,30,30);
  ship.addAnimation("movingShip",shipImage)
  ship.scale = 0.25;

}

function draw() {
  background(0);

  sea.velocityX = -3
  
  if(sea.x < 0){
  sea.x = sea.width/8;

  }
  drawSprites();
}