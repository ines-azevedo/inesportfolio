let imgr, imga, imge;
let canvas;

function preload(){
    imga=loadImage('images/simbolo-azul.png');
    imgr=loadImage('images/simbolo.png');
    imge=loadImage('images/eu.jpg');
}

function setup() {
    canvas=createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');

    imga.resize(1500, 1500);
    imgr.resize(50,50);
    imge.resize(400, 500);
    imageMode(CENTER);
}

function draw() {
    background('#f7f5dc');

    image(imge, width/2-400, height/2+50);

    push();
    translate(width/2-200, height/2+200);
    rotate(radians(frameCount));
    image(imga, 0, 0);
    pop();

    image(imgr,mouseX,mouseY);
}

//=======TO BE RESPONSIVE=======
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }