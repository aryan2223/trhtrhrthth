var helecopterImg, helecopterEnemyImg;
var missil,missilImg

var missilGroup,helecopterEnemyGroup;
var bg,bgImg







function preload(){
helecopterImg.loadImage("asset/th.jpg")
helecopterEnemyImg.loadImage("asset/fgfggg.jpg")
missilImg.loadImage("asset/hyhhh.jpg")
bgImg.loadImage("asset/download.jpg")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  


player = createSprite(displayWidth-1100, displayHeight-300, 50, 50);
 player.addImage(helecopterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,500,300)


   
   

    
    helecopterEnemyGroup = new Group();
    missilGroup = new Group();
  }




function draw() {
  background(0);  
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyWentDown("space")){
  
 missil.addImage(missilImg)
  
 
} 
  
  
if(helecopterEnemyGroup.isTouching(player)){
 

  for(var i=0;i<helecopterEnemyGroup.length;i++){     
       
   if(helecopterEnemyGroup[i].isTouching(player)){
      helecopterEnemyGroup[i].destroy()
        } 
  }
 }
  
  
  
enemy();
  
  
  drawSprites();
}



function enemy(){
  if(frameCount%50===0){

    helecopterEnemyGroup = createSprite(random(500,1100),random(400,500),40,40)

    helecopterEnemyGroup .addImage(zombieImg)
    helecopterEnemyGroup  = 0.15
    helecopterEnemyGroup .velocityX = -3
    helecopterEnemyGroup .debug= true
    helecopterEnemyGroup .setCollider("rectangle",0,0,400,400)
   
    helecopterEnemyGroup .lifetime = 400
    helecopterEnemyGroup .add( helecopterEnemy)
  }

}