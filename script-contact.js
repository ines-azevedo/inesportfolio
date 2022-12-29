let imgr, imga;
let canvas;

function preload(){
    imga=loadImage('images/simbolo-azul.png');
    imgr=loadImage('images/simbolo.png');
}

function setup() {
    canvas=createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');

    imga.resize(2000, 2000);
    imgr.resize(50,50);
    imageMode(CENTER);
}

function draw() {
    background('#f7f5dc');

    image(imga, width/2, height/2+250);
    image(imgr,mouseX,mouseY);
}

//=======TO BE RESPONSIVE=======
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }