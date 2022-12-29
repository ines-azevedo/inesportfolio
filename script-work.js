let img, imga, imgr;
let canvas;
let EditorialNew;
let img1, img2, img3, img4, img5, img6, img7, img8, img9;

function preload(){
  img=loadImage('images/simbolo.png');
  imgr=loadImage('images/simbolo.png');
  imga=loadImage('images/simbolo-azul.png');
  img1=loadImage('images/1.png');
  img2=loadImage('images/2.png');
  img3=loadImage('images/3.png');
  img4=loadImage('images/4.png');
  img5=loadImage('images/5.png');
  img6=loadImage('images/6.png');
  img7=loadImage('images/7.png');
  img8=loadImage('images/8.png');
  img9=loadImage('images/9.png');

  EditorialNew=loadFont('fonts/EditorialNew-Medium.ttf')
}

function setup() {
canvas=createCanvas(windowWidth,windowHeight);
canvas.position(0,0);
canvas.style('z-index','-1');

img.resize(200, 200);
imga.resize(200, 200);
imgr.resize(50, 50);
imageMode(CENTER);

textFont(EditorialNew);
textAlign(CENTER, CENTER);

}

function draw() {
 background('#f7f5dc');
 textSize(40);
 textAlign(CENTER, CENTER);

  for (let i=1; i<6; i++) {
    for(let j=1.25;j<=4;j++){
      if(dist(mouseX,mouseY,i*(width/6), j*(height/4))<70){
        push();
        translate(i*(width/6), j*(height/4));
        rotate(radians(frameCount*5));
        image(imga, 0, 0);
        pop();

      } else{
        push();
        translate(i*(width/6), j*(height/4));
        rotate(radians(frameCount));
        image(imga, 0, 0);
        pop();
      }
      
      if(i==1*2 && j==1.25){
        text('1', i*(width/6), j*(height/4));
      }

      if(i==1*3 && j==1.25){
        text('2', i*(width/6), j*(height/4));
      }

      if(i==1*4 && j==1.25){
        text('3', i*(width/6), j*(height/4));
      }
      
      if(i==1*2 && j==1.25+1){
        text('4', i*(width/6), j*(height/4));
      }

      if(i==1*3 && j==1.25+1){
        text('5', i*(width/6), j*(height/4));
      }

      if(i==1*4 && j==1.25+1){
        text('6', i*(width/6), j*(height/4));
      }

      if(i==1*2 && j==1.25+2){
        text('7', i*(width/6), j*(height/4));
      }

      if(i==1*3 && j==1.25+2){
        text('8', i*(width/6), j*(height/4));
      }

      if(i==1*4 && j==1.25+2){
        text('9', i*(width/6), j*(height/4));
      }
    }
  }

  for (let i=1; i<6; i++) {
    for(let j=1.25;j<=4;j++){
      textSize(40);
      textAlign(LEFT, CENTER);
      if(dist(mouseX,mouseY,i*(width/6), j*(height/4))<70){
        if(i==1*2 && j==1.25){
          image(img1, width/2, height/2+45);
          text('illustration', width/2-500, height/2-50);
          text('"casa"', width/2+350, height/2+150);
        }
  
        if(i==1*3 && j==1.25){
          image(img2, width/2, height/2+45);
          text('illustration', width/2-500, height/2-50);
          text('"o mundo', width/2+350, height/2+150);
          text('de pernas para o ar"', width/2+350, height/2+200);
        }
  
        if(i==1*4 && j==1.25){
          image(img3, width/2, height/2+45);
          text('illustration',  width/2-500, height/2-50);
          text('"o mundo', width/2+350, height/2+150);
          text('de pernas para o ar"', width/2+350, height/2+200);
        }
        
        if(i==1*2 && j==1.25+1){
          image(img4, width/2, height/2+45);
          text('competition',  width/2-500, height/2-50);
          text('design com lata',  width/2-500, height/2);
        }
  
        if(i==1*3 && j==1.25+1){
          image(img5, width/2, height/2+45);
          text('graphic',  width/2-500, height/2-50);
          text('identity',  width/2-500, height/2);
          text('choupal,', width/2+350, height/2+150);
          text('coimbra', width/2+350, height/2+200);
        }
  
        if(i==1*4 && j==1.25+1){
          image(img6, width/2, height/2+45);
          text('graphic',  width/2-500, height/2-50);
          text('identity',  width/2-500, height/2);
          text('veritas,', width/2+350, height/2+150);
          text('maat exhibition', width/2+350, height/2+200);
        }
  
        if(i==1*2 && j==1.25+2){
          image(img7, width/2, height/2+45);
          text('graphic',  width/2-500, height/2-50);
          text('identity',  width/2-500, height/2);
          text('veritas,', width/2+350, height/2+150);
          text('maat exhibition', width/2+350, height/2+200);
        }
  
        if(i==1*3 && j==1.25+2){
          image(img8, width/2, height/2+45);
          text('graphic',  width/2-500, height/2-50);
          text('identity',  width/2-500, height/2);
          text('ptsb -', width/2+350, height/2+150);
          text('portugal', width/2+350, height/2+200);
          text('sem bullying', width/2+350, height/2+250);
          text('volunteering',  width/2-500, height/2+100);
        }
  
        if(i==1*4 && j==1.25+2){
          image(img9, width/2, height/2+45);
          text('illustration',  width/2-500, height/2-50);
          text('memory game', width/2+350, height/2+150);
        }
      }
    }
  }

  image(imgr,mouseX,mouseY);
}

//=======TO BE RESPONSIVE=======
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}