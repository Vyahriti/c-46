var bg,bgImg;
var player, shooterImg, shooter_shooting,invisibleground;


function preload(){
  
 harryImg=loadAnimation("assets/hp_1.png","assets/hp_1.png")
 snitchImg=loadImage("assets/snitch.png")
voldemortImg=loadImage("assets/voldemort.png")
dementorImg=loadImage("assets/dementor.png")
bgImg=loadImage("assets/bg-img.JPG")
boxImg=loadImage("assets/box.png")
bludgerImg=loadImage("assets/bludger.png")
fireworkImg=loadImage("assets/weasley's whizard wheezes.png")
killspellImg=loadImage("assets/avada-kedavra.png")
blastspellImg=loadImage("assets/bombarda.png")
patronusspellImg=loadImage("assets/patronus.png")


harry_running=loadAnimation("assets/hp_1.png","assets/hp_2.png","assets/hp_3.png")



}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  // adding the background image
  bg = createSprite(0,0,width,height)
bg.addImage(bgImg)
bg.scale = 7.5
bg.x = bg.width /2;
  bg.velocityX = -4;
 

//creating the player sprite
player = createSprite(80, displayHeight-300, 50, 50);
player.addAnimation("running", harry_running)
 player.addAnimation("idle",harryImg)
   player.scale = 5
 
   
  //  player.debug = true
   player.setCollider("rectangle",0,0,20,30)


invisibleground=createSprite(width/2,height-50,width,20)
invisibleground.visible=false

}

function draw() {
  background(0); 

  if (bg.x < 0){
    bg.x = bg.width/2;}


  //moving the player up and down and making the game mobile compatible using touches
if((keyDown("UP_ARROW") && player.y>=750)||touches.length>0 ){
  player.velocityY= -20
  console.log(player.y)
  player.changeAnimation("idle")
}
player.velocityY = player.velocityY + 0.9

// if(keyDown("DOWN_ARROW")||touches.length>0){
//  player.y = player.y+30
// }


// // //release bullets and change the image of shooter to shooting position when space is pressed
// if(keyWentDown("space")||touches.length>0){
//  player.velocityY= -2
//   player.changeAnimation("idle")
 
// }


// // //player goes back to original standing image once we stop pressing the space bar
// else if(keyWentUp("space")){
  
//   player.changeAnimation("running")
 
// }


player.collide(invisibleground)

drawSprites(); 

}
