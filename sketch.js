var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path=createSprite (200,0);
path.addImage(pathImg);  
path.velocityY = 4;
path.scale=1.2;

//Criando menino que corre 
boy=createSprite(200,340,30,30);
boy.addAnimation("boy",boyImg);
boy.scale=0.08;  
  
   
// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(1,400,100,800);
leftBoundary.visible = false;

//Crie Boundary direito 
rightBoundary=createSprite(1,400,0,800);
rightBoundary.visible = false;
}


function draw() {
background(0);
path.velocityY = 4;
boy.collide(leftBoundary);
boy.collide(rightBoundary);


// Menino se movendo no eixo X com o mouse
boy.x = World.mouseX;




 //Reiniciar o fundo
 if (path.y > 400){
  path.y = path.height / 20
 
 }



 drawSprites();
 path.depth = boy.depth;
 boy.depth = boy.depth+3;
 }
