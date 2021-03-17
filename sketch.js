var junsound,walsound
var backimage,bananaImage,obstascleimage
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,invisibleGround
var FoodGroup, obstacleGroup
var score
var Play
var End
var gamestate = Play

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png",
 "sprite_2.png","sprite_3.png","sprite_4.png",
 "sprite_5.png","sprite_6.png","sprite_7.png",          "sprite_8.png")                                                                       
  backimage = loadImage("j1.png")
          
  bananaImage = loadImage("banana.png");
  
  obstaceImage = loadImage("obstacle.png");
  
  junsound = loadSound("jun.mp3")
  
  walsound = loadSound("Wal.mp3")

  obstacleGroup = new Group()
  
  FoodGroup = new Group()
  


  
  
  score = 0
}


function setup() {
   createCanvas(500, 370);
  
  
 back = createSprite(220,200)
  back.addImage(backimage) 
  back.x = back.width /2;
  
 invisibleGround = createSprite(250,335,600,10)
 invisibleGround.visible = false;
  
   monkey = createSprite(50,335);
 monkey.addAnimation("monkey",monkey_running) 
  monkey.scale=0.15;
  
  
  
}



function draw() {
 
  background("white");
  monkey.collide(invisibleGround);
  
 
  
  if(gamestate === Play){
  
     
    
  if (back.x < 0){
      back.x = back.width/2;
    }
  
  monkey.velocityY =monkey.velocityY + 0.8
  
  if(keyDown("space")&&monkey.y >280) {
      
        monkey.velocityY = -14;
    }

  
  back.velocityX=-6;
 
   if(World.frameCount%100===0){
    Obstacle()
 }
  
  if(World.frameCount%200===0){
    Fruit()
 }
  drawSprites();
  textSize(16)
  fill("wihte")
   score=Math.round(getFrameRate()/1);
   text("Survival Time: "+score,370,20)
  }
  

  
}

function Obstacle(){
  junsound.play()
  walsound.play()
 obstacle=createSprite(550,285)
  obstacle.setCollider
  ("circle",-20,-20,230);
 obstacle.addImage(obstaceImage) 
  obstacle.scale=0.2;
  obstacle.velocityX=-6
  obstacle.lifetime=100;
  obstacleGroup.add(obstacle)
      
}

function Fruit(){
junsound.play()
banana=createSprite(550,70)
banana.addImage(bananaImage) 
  banana.scale=0.1
  banana.velocityX=-7
  FoodGroup.add(banana)
}


