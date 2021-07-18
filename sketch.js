var backgroundImage;
var iss,issImg;
var spacecraft1,spacecraft1Img,spacecraft2,spacecraft2Img,spacecraft3,spacecraft3Img;
var spacecraft4,spacecraft4Img;
var hasDocked=false;
var gameState=1;
function preload(){
backgroundImage=loadImage("spacebg.jpg");
spacebg=loadImage("spacebg.jpg");
issImg=loadImage("iss.png");
spacecraft1Img=loadImage("spacecraft1.png");
spacecraft2Img=loadImage("spacecraft2.png");
spacecraft3Img=loadImage("spacecraft3.png");
spacecraft4Img=loadImage("spacecraft4.png");
}
function setup(){
  createCanvas(700,600);
  iss=createSprite(300,250,40,40);
 iss.addImage(issImg);
 spacecraft1=createSprite(250,360,10,10);
 spacecraft1.scale=0.2;
 spacecraft1.addImage(spacecraft1Img);
}

function draw() {
  background(backgroundImage);
  
  drawSprites();
  if(!hasDocked){
  spacecraft1.x=spacecraft1.x + random(-1,1);
    if(keyDown("RIGHT_ARROW")){
      spacecraft1.addImage(spacecraft4Img);
      spacecraft1.x=spacecraft1.x+2}
    if (keyDown("LEFT_ARROW")){
      spacecraft1.addImage(spacecraft3Img);
      spacecraft1.x=spacecraft1.x-2}
      if (keyDown("UP_ARROW")){
        spacecraft1.addImage(spacecraft2Img);
        spacecraft1.y=spacecraft1.y-2}  
        if (keyDown("DOWN_ARROW")){
          spacecraft1.addImage(spacecraft1Img);
          spacecraft1.y=spacecraft1.y+4}
          }
          if(spacecraft1.y <= (iss.y+70) && spacecraft1.x <= (iss.x-10)){
            hasDocked = true;
            textSize(25);
            fill("white")
            text("Docking Successful!", 200, 300);
          }
            
      }

