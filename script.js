let imga, imgr;
let canvas;

function preload(){
  imgr=loadImage('images/simbolo.png');
  imga=loadImage('images/simbolo-azul.png');
}

function setup() {
canvas=createCanvas(windowWidth,windowHeight);
canvas.position(0,0);
canvas.style('z-index','-1');

imga.resize(2000, 2000);
imgr.resize(50, 50);
imageMode(CENTER);

}

function draw() {
 background('#f7f5dc');

  push();
  translate(width/2, height/2+250);
  rotate(radians(frameCount));
  image(imga, 0, 0);  
  pop();

  image(imgr,mouseX,mouseY);
}

//=======TO BE RESPONSIVE=======
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
