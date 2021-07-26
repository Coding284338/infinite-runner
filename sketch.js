var man;
var manImage;
var o;
var oImage;
var ground;
var groundImage;
var ground2
var gameState = 0;
function preload()
{
    manImage = loadAnimation("man.png")
    oImage = loadAnimation ("o.png")
    groundImage = loadAnimation ("ground.png")
}

function setup()
{
    createCanvas(800, 400);
    man = createSprite(200, 300, 20, 20);
    man.scale = 0.4;
    //man.addAnimation("running", manImage);
   //s man.debug = true;
    edges = createEdgeSprites()
    //ground = createSprite(100, 360, 800, 20)
    //ground.addAnimation("ground", groundImage);
    
    //ground2 = createSprite(100, 380, 800, 20);
    //ground2.visible = false
    oGroup = new Group();
    
    
}

function draw()
{

    //background("white")
    if (keyDown("space")) {
        man.velocityY = -13;
      }
    if (gameState === 1) {
      // gamestate play 
     // ground.velocityX = -10
     console.log(man.y);
  
      //if (ground.x < 0) {
       // ground.x = ground.width / 2;
     // }
  
      spawnO();
      
  
      if(o.isTouching(man))
      {
        gameState = 0;
      }
    
    } else if (gameState === 0){
  
     // ground.velocityX = 0;
      oGroup.setVelocityXEach(0);
      
      //man.collide(ground)
      man.velocityY = man.velocityY + 0.8;
      drawSprites();
    }
}

function spawnO()
{
    if (World.frameCount % 60 == 0) {
        var o = createSprite(800, 335, 20, 20);
        o.velocityX = -5;
        o.scale = 0.75;
        oGroup.add(o);
        o.lifetime = width/o.velocityX;

    }
}


function reset()
{
        gameState = PLAY;
        gameOver.visible = false;
        restart.visible = false;
        
        oGroup.destroyEach();
        manGroup.destroyEach();
}
