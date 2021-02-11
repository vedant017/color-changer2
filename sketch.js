function setup() {
  createCanvas(800,400);
 ball= createSprite(400, 200, 50, 50);
 bat= createSprite(300, 150, 40, 40);
 toy= createSprite(200,170,30.20);
 baseball= createSprite(600,170,22,17)
baseball.velocityX=-4
}

function draw() {
  background("lightgreen");  
  bat.x=mouseX
  bat.y=mouseY
  if(jerk(ball,bat)){
    ball.shapeColor="red"
     bat.shapeColor="red"
  }else{
     ball.shapeColor="yellow"
     bat.shapeColor="yellow"
  }
  if(jerk(toy,baseball)){
    toy.height=toy.height*2
  }else{
    toy.height=20
  }
  drawSprites();
}
