var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
//States
var End
var Play
var gameState = Play
//Score
var height = 0 //Extrañamente es considerada 700
var gameOver, restart

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadAnimation("ghost-standing.png", "ghost-jumping.png");
  spookySound = loadSound("spooky.wav");
  laughSound = loadSound("laugh.mp3");
  Lose = loadImage("gameover.png");
}

function setup() {

  createCanvas(700, 700);

  tower = createSprite(400,400);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  //Jugador
  ghost = createSprite (190, 300, 50, 50);
  ghost.addAnimation ("ghost", ghostImg)
  ghost.scale = .43

  
}

function draw() {
  background("green");
  
  drawSprites ();

  textSize(40);
  fill(255);
  text("Score: "+ height, 500, 650)

  if(gameState===Play){
    /*Funciona semicorrectamente, 
    pero parece afectar todo el código más 
    adelante*/
    //height = height + Math.round(getFrameRate()/50);
    if(keyDown ("S")){
    spookySound.loop();
    }
  
    if(keyDown ("M")){
    spookySound.stop();
    }
    if(tower.y > 400){
      tower.y = 300
    }

    if (keyDown ("space")){
    ghost.velocityY = -5
    }
    //Gravity
    ghost.velocityY = ghost.velocityY +.1
  
    if (keyDown ("left_arrow")){
    ghost.x = ghost.x -6
    }

    if (keyDown ("right_arrow")){
    ghost.x = ghost.x +6
    }
    if(keyWentDown("L")){
    laughSound.play();
    }
    obstacle();
    //Esto está generando un fallo y que se congele el juego
    /*if (ghost.isTouching(climber)||ghost.isTouching(door)){
      gameState = End
    }*/
  }
}
function obstacle(){
if (frameCount % 200 === 0){
climber = createSprite (350, 10, 5, 5) 
door = createSprite (350, -60  , 5, 5)
climber.addImage (climberImg)
door.addImage (doorImg)
door.x = Math.round (random (200, 350) )
climber.x = door.x 

door.velocityY = 3
climber.velocityY = 3
}

}