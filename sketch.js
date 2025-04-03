let circleX=200
let circleY=200
let speed=5
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (keyIsPressed){
    if(keyCode===LEFT_ARROW){
      circleX -= speed}
    else if (keyCode===RIGHT_ARROW){
      circleX+=speed}
    else if (keyCode===UP_ARROW){
      circleY-=speed}
    else if (keyCode===DOWN_ARROW){
      circleY+=speed}
  }
  
  ellipse(circleX,circleY,50,50)
}