
var monkey, monkeyImage, ground, groundImage,fakeGround, bananaImage, bananaGroup, obstacleImage, obstacleGroup, survivalTime;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  groundImage = loadImage("jungle.jpg");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
}



  
// //jump when the space key is pressed

    
//  monkey.collide(ground);
//  monkey.setCollider("circle");
  



  






function setup() {
   
  createCanvas(400, 400);
  
  fakeGround = createSprite(30, 390, 400, 5);
  
  ground = createSprite(100, 200, 400, 10);
  ground. addImage(groundImage);
  ground. scale = 1;
  ground.velocityX = -2;
  
  monkey = createSprite(70, 330, 10, 10);
  monkey.addAnimation("Jumping",monkeyImage);
  monkey.scale = 0.15;
  
  survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("black");
  
  //create new groups
  bananaGroup = new Group();
  obstacleGroup = new Group();
  }

function draw() {
  background(220);
  


  
if (gameState === PLAY) {
   
  survivalTime = survivalTime +              Math.round(World.frameRate/50);
  
  if(keyDown("space")){
  monkey.velocityY = -15;
  }
  
//add gravity
  monkey.velocityY = monkey.velocityY + 0.8;        
  
  monkey.setCollider("circle");
  monkey.collide(fakeGround);
    
  //reset ground to centre
  if (ground.x < 0){
   ground.x = ground.width/2;
     }
  
  //call functions
  bananaFun();
  obstacleFun();
    
}
  
  
    
  drawSprites();
}

function bananaFun(){
  if(World.frameCount % 80 === 0){
   var banana = createSprite(400, 320, 40, 10);
   banana.addImage(bananaImage);
   banana.scale = 0.05;
   banana.velocityX = -3;
   banana.y = random(120, 200);
   banana.lifetime = 134;
   bananaGroup.add(banana);
  
 }
  
}

function obstacleFun(){
   if (World.frameCount % 300 === 0){
     var obstacle = createSprite(400, 350);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.15;
     obstacle.velocityX = -4;
     obstacle.lifetime = 200;
   
  }
}
 
