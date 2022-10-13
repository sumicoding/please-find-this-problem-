var apple,bg,box,coin,ground,spike;
var appleImg,bgImg,boxImg,coinImg,groundImg,spikeImg;


function preload(){
  box = loadImage("box.png")

  
}


function setup() {
  createCanvas(1280,600);
  box=createSprite(90, 320, 50, 50);

  ground=createSprite(0,450,2525,200);

  cloud1 = createSprite(1000,100,30,30);
  cloud2 = createSprite(700,100,30,30);
  cloud3 = createSprite(400,100,30,30);
  cloud4 = createSprite(100,100,30,30);

  sun = createSprite(800,200,50,50);
}



function draw() {
  background("lightGrey");  
  drawSprites();
}