var myFont;
function preload() {
myFont = loadFont('assets/Pixeled.ttf');}

var myFont2;
function preload() {
myFont = loadFont('assets/Minecraftia-Regular.ttf');}

var estado = 0;

var INTRO = 1;
var INSTRUCTIONS = 2;
var LEVEL1 = 3;
var LEVEL2 = 4;
var LEVEL3 = 5;
var LEVEL4 = 6;
var LEVEL5 = 7;
var OUTRO = 8;
var YOULOSE = 9;

var colorFondo = 100;

var b;

var c; 

var elAsteroide1;
var elAsteroide2;
var elAsteroide3;
var elAsteroide4;
var elAsteroide5;
var elAsteroide6;

var puntaje = 0;

var value = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  estado = INTRO;

  c = new comida();
  elAsteroide1 = new Asteroide();
  elAsteroide2 = new Asteroide2();
  elAsteroide3 = new Asteroide3();
  elAsteroide4 = new Asteroide4();
  elAsteroide5 = new Asteroide5();
  elAsteroide6 = new Asteroide6();
  b = new bola(); 
}

function draw() {
  
   //Nombre
  if (estado == INTRO){
    background(10, 0, 0);
    for(var numCuad = 0;numCuad < 5; numCuad = numCuad+ 0.4) {
    noStroke();
    fill(255);
    rect(width/1.1,222*numCuad+height/28,3,3);
    rect(width/1.6,222*numCuad+height/170,3,3);
    rect(width/2.8,222*numCuad+height/80,3,3);
    rect(width/5,222*numCuad+height/80,3,3);
    rect(width/2,222*numCuad+height/28,3,3);
    rect(width/1.3,222*numCuad+height/28,3,3);
    rect(width/16,222*numCuad+height/170,3,3);}
    textFont(myFont);
    textAlign(CENTER);
    textSize(windowWidth / 8, windowHeight/1);
    text("OVNI", width/2, height/2);
    textSize(windowWidth / 24);
    text("Touch to start", width/2, height/1.3);}
  
   //Instrucciones
    else if (estado == INSTRUCTIONS) {
    background(0, 0, 0);
    for(var numCuad1 = 0;numCuad1 < 5; numCuad1 = numCuad1+ 0.4) {
    noStroke();
    fill(255);
    rect(width/1.1,222*numCuad1+height/28,3,3);
    rect(width/1.6,222*numCuad1+height/170,3,3);
    rect(width/2.8,222*numCuad1+height/80,3,3);
    rect(width/5,222*numCuad1+height/80,3,3);
    rect(width/2,222*numCuad1+height/28,3,3);
    rect(width/1.3,222*numCuad1+height/28,3,3);
    rect(width/16,222*numCuad1+height/170,3,3);}
    fill(255);
    textAlign(CENTER);
    textSize(27);
    text("Ovni loves stars, and he likes", width/2, height/4); 
    text("to collect them. Unfortunetly", width/2, height/3.2); 
    text("he crashed and lost them all.", width/2, height/2.6); 
    text ("Help ovni collect his 12 stars", width/2, height/2.2); 
    text ("so he can be happy again.", width/2, height/1.9);
    fill(240,210,80);
    text ("Tilt device to move Ovni,", width/2, height/ 1.4);
    text ("and be careful of the asteroids", width/2, height/ 1.3);}
  
    //Nivel 1
    if (estado == LEVEL1) {
    background(value);
    for(var numCuad2 = 0;numCuad2 < 5; numCuad2 = numCuad2+ 0.4) {
    noStroke();
    fill(255);
    rect(width/1.1,222*numCuad2+height/28,3,3);
    rect(width/1.6,222*numCuad2+height/170,3,3);
    rect(width/2.8,222*numCuad2+height/80,3,3);
    rect(width/5,222*numCuad2+height/80,3,3);
    rect(width/2,222*numCuad2+height/28,3,3);
    rect(width/1.3,222*numCuad2+height/28,3,3);
    rect(width/16,222*numCuad2+height/170,3,3);}
    fill(255);
    textAlign(LEFT);
    textSize(20);
    text("Score " + puntaje, 10, 30);
    textAlign(RIGHT);
    textSize(20);
    text("LEVEL 1 ", width/1, 30);

    c.dibujarse();
    elAsteroide1.dibujarse();
    elAsteroide1.moverse();
    elAsteroide2.dibujarse();
    elAsteroide2.moverse();
    b.dibujarse();
    b.moverse();
  
  if (dist(elAsteroide1.x, elAsteroide1.y, b.x, b.y)  < 37) {
    estado = YOULOSE;}
    else if (dist(elAsteroide2.x, elAsteroide2.y, b.x, b.y)  < 37) {
            estado = YOULOSE;}
  if (dist(elAsteroide1.x, elAsteroide1.y, b.x, b.y)  < 37) {
          b.morir();}
    else if (dist(elAsteroide2.x, elAsteroide2.y, b.x, b.y)  < 37) {
          b.morir();}
      
  if (dist(b.x, b.y, c.x, c.y) < 37) {
    c.morir();}
   if (dist(b.x, b.y, c.x, c.y) < 38) {
    puntaje = puntaje + 1;} 
   if (puntaje > 3) {
      estado = LEVEL2;
      puntaje = 3;}
  
    //Nivel 2  
    } else if (estado == LEVEL2) {
    background(value);
    for(var numCuad3 = 0;numCuad3 < 5; numCuad3 = numCuad3+ 0.4) {
    noStroke();
    fill(255);
    rect(width/1.1,222*numCuad3+height/28,3,3);
    rect(width/1.6,222*numCuad3+height/170,3,3);
    rect(width/2.8,222*numCuad3+height/80,3,3);
    rect(width/5,222*numCuad3+height/80,3,3);
    rect(width/2,222*numCuad3+height/28,3,3);
    rect(width/1.3,222*numCuad3+height/28,3,3);
    rect(width/16,222*numCuad3+height/170,3,3);}
    fill(255);
    textAlign(LEFT);
    textSize(20);
    text("Score " + puntaje, 10, 30);
    textAlign(RIGHT);
    textSize(20);
    text("LEVEL 2 ", width/1, 30);
    
    elAsteroide1.dibujarse();
    elAsteroide1.moverse();
    elAsteroide2.dibujarse();
    elAsteroide2.moverse();
    elAsteroide3.dibujarse();
    elAsteroide3.moverse();
    b.dibujarse();
    b.moverse();
    c.dibujarse();
      
    if (dist(elAsteroide1.x, elAsteroide1.y, b.x, b.y)  < 37) {
    estado = YOULOSE;}
     else if (dist(elAsteroide2.x, elAsteroide2.y, b.x, b.y)  < 37) {
              estado = YOULOSE;}
      else if (dist(elAsteroide3.x, elAsteroide3.y, b.x, b.y)  < 37) {
            estado = YOULOSE;}
    
    if (dist(b.x, b.y, c.x, c.y) < 37) {
    c.morir();}
    if (dist(b.x, b.y, c.x, c.y) < 38) {
    puntaje = puntaje + 1;} 
    if (puntaje > 6) {
      estado = LEVEL3;
      puntaje = 6;}
    
    //Nivel 3
    } else if (estado == LEVEL3) {
    background(value);
    for(var numCuad4 = 0;numCuad4 < 5; numCuad4 = numCuad4+ 0.4) {
    noStroke();
    fill(255);
    rect(width/1.1,222*numCuad4+height/28,3,3);
    rect(width/1.6,222*numCuad4+height/170,3,3);
    rect(width/2.8,222*numCuad4+height/80,3,3);
    rect(width/5,222*numCuad4+height/80,3,3);
    rect(width/2,222*numCuad4+height/28,3,3);
    rect(width/1.3,222*numCuad4+height/28,3,3);
    rect(width/16,222*numCuad4+height/170,3,3);}
    fill(255);
    textAlign(LEFT);
    textSize(20);
    text("Score " + puntaje, 10, 30);
    textAlign(RIGHT);
    textSize(20);
    text("LEVEL 3 ", width/1, 30);
    
    elAsteroide1.dibujarse();
    elAsteroide1.moverse();
    elAsteroide2.dibujarse();
    elAsteroide2.moverse();
    elAsteroide3.dibujarse();
    elAsteroide3.moverse();
    elAsteroide4.dibujarse();
    elAsteroide4.moverse();
    b.dibujarse();
    b.moverse();
    c.dibujarse();
    
    if (dist(elAsteroide1.x, elAsteroide1.y, b.x, b.y)  < 37) {
    estado = YOULOSE;}
     else if (dist(elAsteroide2.x, elAsteroide2.y, b.x, b.y)  < 37) {
              estado = YOULOSE;}
      else if (dist(elAsteroide3.x, elAsteroide3.y, b.x, b.y)  < 37) {
            estado = YOULOSE;}
       else if (dist(elAsteroide4.x, elAsteroide4.y, b.x, b.y)  < 37) {
            estado = YOULOSE;}
      
    if (dist(b.x, b.y, c.x, c.y) < 37) {
    c.morir();}
    if (dist(b.x, b.y, c.x, c.y) < 38) {
    puntaje = puntaje + 1;} 
    if (puntaje > 9) {
      estado = LEVEL4;
      puntaje = 9;}
    
    //Nivel 4
    } else if (estado == LEVEL4) {
    background(value);
    for(var numCuad5 = 0;numCuad5 < 5; numCuad5 = numCuad5+ 0.4) {
    noStroke();
    fill(255);
    rect(width/1.1,222*numCuad5+height/28,3,3);
    rect(width/1.6,222*numCuad5+height/170,3,3);
    rect(width/2.8,222*numCuad5+height/80,3,3);
    rect(width/5,222*numCuad5+height/80,3,3);
    rect(width/2,222*numCuad5+height/28,3,3);
    rect(width/1.3,222*numCuad5+height/28,3,3);
    rect(width/16,222*numCuad5+height/170,3,3);}
    fill(255);
    textAlign(LEFT);
    textSize(20);
    text("Score " + puntaje, 10, 30);
    textAlign(RIGHT);
    textSize(20);
    text("LEVEL 4 ", width/1, 30);
    
    elAsteroide1.dibujarse();
    elAsteroide1.moverse();
    elAsteroide2.dibujarse();
    elAsteroide2.moverse();
    elAsteroide3.dibujarse();
    elAsteroide3.moverse();
    elAsteroide4.dibujarse();
    elAsteroide4.moverse();
    elAsteroide5.dibujarse();
    elAsteroide5.moverse();
    b.dibujarse();
    b.moverse();
    c.dibujarse();
      
    if (dist(elAsteroide1.x, elAsteroide1.y, b.x, b.y)  < 37) {
    estado = YOULOSE;}
     else if (dist(elAsteroide2.x, elAsteroide2.y, b.x, b.y)  < 37) {
              estado = YOULOSE;}
      else if (dist(elAsteroide3.x, elAsteroide3.y, b.x, b.y)  < 37) {
            estado = YOULOSE;}
       else if (dist(elAsteroide4.x, elAsteroide4.y, b.x, b.y)  < 37) {
            estado = YOULOSE;}
         else if (dist(elAsteroide5.x, elAsteroide5.y, b.x, b.y)  < 37) {
            estado = YOULOSE;}
      
    if (dist(b.x, b.y, c.x, c.y) < 37) {
    c.morir();}
    if (dist(b.x, b.y, c.x, c.y) < 38) {
    puntaje = puntaje + 1;} 
    
    if (puntaje > 10) {
      estado = LEVEL5;
      puntaje = 10;}
     
    //Nivel 5
    } else if (estado == LEVEL5) {
    background(value);
    for(var numCuad6 = 0;numCuad6 < 5; numCuad6 = numCuad6+ 0.4) {
    noStroke();
    fill(255);
    rect(width/1.1,222*numCuad6+height/28,3,3);
    rect(width/1.6,222*numCuad6+height/170,3,3);
    rect(width/2.8,222*numCuad6+height/80,3,3);
    rect(width/5,222*numCuad6+height/80,3,3);
    rect(width/2,222*numCuad6+height/28,3,3);
    rect(width/1.3,222*numCuad6+height/28,3,3);
    rect(width/16,222*numCuad6+height/170,3,3);}
    fill(255);
    textAlign(LEFT);
    textSize(20);
    text("Score " + puntaje, 10, 30);
    textAlign(RIGHT);
    textSize(20);
    text("LEVEL 5 ", width/1, 30);

    elAsteroide1.dibujarse();
    elAsteroide1.moverse();
    elAsteroide2.dibujarse();
    elAsteroide2.moverse();
    elAsteroide3.dibujarse();
    elAsteroide3.moverse();
    elAsteroide4.dibujarse();
    elAsteroide4.moverse();
    elAsteroide5.dibujarse();
    elAsteroide5.moverse();
    elAsteroide6.dibujarse();
    elAsteroide6.moverse();
    b.dibujarse();
    b.moverse();
    c.dibujarse();
      
    if (dist(elAsteroide1.x, elAsteroide1.y, b.x, b.y)  < 37) {
    estado = YOULOSE;}
     else if (dist(elAsteroide2.x, elAsteroide2.y, b.x, b.y)  < 37) {
              estado = YOULOSE;}
      else if (dist(elAsteroide3.x, elAsteroide3.y, b.x, b.y)  < 37) {
            estado = YOULOSE;}
       else if (dist(elAsteroide4.x, elAsteroide4.y, b.x, b.y)  < 37) {
            estado = YOULOSE;}
         else if (dist(elAsteroide5.x, elAsteroide5.y, b.x, b.y)  < 37) {
            estado = YOULOSE;}
          else if (dist(elAsteroide6.x, elAsteroide6.y, b.x, b.y)  < 37) {
            estado = YOULOSE;}
      
    if (dist(b.x, b.y, c.x, c.y) < 37) {
    c.morir();}
    if (dist(b.x, b.y, c.x, c.y) < 38) {
    puntaje = puntaje + 1;} 
    if (puntaje > 11) {
      estado = OUTRO;
      puntaje = 12;}
   
    } else if (estado == OUTRO) {
    background(200);
    fill(230,190,60);
    textAlign(CENTER);
    textSize(40);
    text("YOU GOT ALL THE STARS", width/2, height/2.1);
    text("AND MADE OVNI HAPPY AGAIN", width/2, height/1.8);
    textSize(20);
    text("Touch to play again", width/2, height/1.3);}
  
    else if (estado == YOULOSE) {
    background(200);
    fill(255);
    textAlign(CENTER);
    textSize(40);
    text("YOU HAVE BEEN HIT", width/2, height/2.1);
    text("BY A METEORITE", width/2, height/1.8);
    textSize(20);
    text("Touch to play again", width/2, height/1.3);          }
}

function mousePressed() {
  if (estado == INTRO) {
      estado = INSTRUCTIONS} 
   else if (estado == INSTRUCTIONS) {
             estado = LEVEL1} 
       else if (estado == OUTRO) {
                 estado = INTRO} 
         else if (estado == YOULOSE) {
                   estado = INTRO} 
            else if (estado == INTRO) {
                      estado = INSTRUCTIONS} 
              else if (estado == INSTRUCTIONS) {
                        estado = LEVEL1} 
}

function bola() {
  this.tam = windowWidth / 12;
  this.x = random(0, width); 
  this.y = random(0, width);
  this.velx = 0;
  this.vely = 0;
  
  this.dibujarse = function() {
   noStroke();
   fill(140,200,220);
   ellipse(this.x+20, this.y, 50,60);
   fill(250,150,50);
   arc(this.x+22,this.y+10,80,20,PI, TWO_PI);}
   

  this.moverse = function() {
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;
    this.vely = map(rotationX, -90, 90, -3, 3);
    this.velx = map(rotationY, -90, 50, -3, 3);
    this.x = constrain(this.x, this.tam / 2, width - this.tam / 2);
    this.y = constrain(this.y, this.tam / 2, height - this.tam / 2);}
  
  this.morir = function() {
  this.x = random(width); 
  this.y = random(height);}
}

function comida() {
  this.tam = random(10, windowWidth / 10);
  this.x = random(this.tam / 2, width - this.tam / 2);
  this.y = random(this.tam / 2, height - this.tam / 2);

  this.dibujarse = function() {
    noStroke();
    fill(240,210,80);
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + 5, this.y + 12);
    vertex(this.x + 17, this.y + 13);
    vertex(this.x + 8, this.y + 22);
    vertex(this.x + 11, this.y + 36);
    vertex(this.x, this.y + 26);
    vertex(this.x -11, this.y + 36);
    vertex(this.x - 8, this.y +22);
    vertex(this.x -17, this.y +13);
    vertex(this.x -5, this.y +12);
    endShape(CLOSE);}
  
  this.morir = function() {
    this.x = random(this.tam / 2, width - this.tam / 2);
    this.y = random(this.tam / 2, height - this.tam / 2);}
}

function Asteroide() {
  this.x = random(0, width); 
  this.y = random(height/4, height/2);
  this.dirX = 1;
  this.dirY = 1;

  this.dibujarse = function() {
    noStroke();
    fill(186, 186, 186);
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + 5, this.y + 15);
    vertex(this.x + 9, this.y + 30);
    vertex(this.x + 17, this.y + 33);
    vertex(this.x + 41, this.y + 33);
    vertex(this.x + 49, this.y + 30);
    vertex(this.x + 53, this.y + 15);
    vertex(this.x + 58, this.y);
    vertex(this.x + 40, this.y - 15);
    vertex(this.x + 18, this.y - 15);
    endShape(CLOSE);

    fill(80,90,100);
    ellipse(this.x + 20, this.y + 5, 12, 12);
    ellipse(this.x + 34, this.y + 15, 7, 7);}

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);}
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);}

    this.x = this.x + (this.dirX* (0, 4));
    this.y = this.y + (this.dirY* (0, 1));}
}

function Asteroide2() {
  this.x = random(0, width); 
  this.y = random(height/4, height/2);
  this.dirX = 1;
  this.dirY = 1;

  this.dibujarse = function() {
    noStroke();
    fill(186, 186, 186);
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + 5, this.y + 15);
    vertex(this.x + 9, this.y + 30);
    vertex(this.x + 17, this.y + 33);
    vertex(this.x + 41, this.y + 33);
    vertex(this.x + 49, this.y + 30);
    vertex(this.x + 53, this.y + 15);
    vertex(this.x + 58, this.y);
    vertex(this.x + 40, this.y - 15);
    vertex(this.x + 18, this.y - 15);
    endShape(CLOSE);

    fill(80,90,100);
    ellipse(this.x + 20, this.y + 5, 12, 12);
    ellipse(this.x + 34, this.y + 15, 7, 7);}

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);}
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);}

    this.x = this.x + (this.dirX* (0, 4));
    this.y = this.y + (this.dirY* (0, 1));}
}

  function Asteroide3() {
  this.x = random(0, width); 
  this.y = random(height/4, height/2);
  this.dirX = 1;
  this.dirY = 1;

  this.dibujarse = function() {
    noStroke();
    fill(186, 186, 186);
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + 5, this.y + 15);
    vertex(this.x + 9, this.y + 30);
    vertex(this.x + 17, this.y + 33);
    vertex(this.x + 41, this.y + 33);
    vertex(this.x + 49, this.y + 30);
    vertex(this.x + 53, this.y + 15);
    vertex(this.x + 58, this.y);
    vertex(this.x + 40, this.y - 15);
    vertex(this.x + 18, this.y - 15);
    endShape(CLOSE);

    fill(80,90,100);
    ellipse(this.x + 20, this.y + 5, 12, 12);
    ellipse(this.x + 34, this.y + 15, 7, 7);}

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);}
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);}

    this.x = this.x + (this.dirX* (0, 4));
    this.y = this.y + (this.dirY* (0, 1));}
}
  
  function Asteroide4() {
  this.x = random(width/12, width); 
  this.y = random(height/15);
  this.dirX = 1;
  this.dirY = 1;

  this.dibujarse = function() {
    noStroke();
    fill(186, 186, 186);
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + 5, this.y + 15);
    vertex(this.x + 9, this.y + 30);
    vertex(this.x + 17, this.y + 33);
    vertex(this.x + 41, this.y + 33);
    vertex(this.x + 49, this.y + 30);
    vertex(this.x + 53, this.y + 15);
    vertex(this.x + 58, this.y);
    vertex(this.x + 40, this.y - 15);
    vertex(this.x + 18, this.y - 15);
    endShape(CLOSE);

    fill(80,90,100);
    ellipse(this.x + 20, this.y + 5, 12, 12);
    ellipse(this.x + 34, this.y + 15, 7, 7);}

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);}
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);}

    this.x = this.x + (this.dirX* (0, 4));
    this.y = this.y + (this.dirY* (0, 1));}
}

  function Asteroide5() {
  this.x = random(width/12, width); 
  this.y = random(height/15);
  this.dirX = 1;
  this.dirY = 1;

  this.dibujarse = function() {
    noStroke();
    fill(186, 186, 186);
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + 5, this.y + 15);
    vertex(this.x + 9, this.y + 30);
    vertex(this.x + 17, this.y + 33);
    vertex(this.x + 41, this.y + 33);
    vertex(this.x + 49, this.y + 30);
    vertex(this.x + 53, this.y + 15);
    vertex(this.x + 58, this.y);
    vertex(this.x + 40, this.y - 15);
    vertex(this.x + 18, this.y - 15);
    endShape(CLOSE);

    fill(80,90,100);
    ellipse(this.x + 20, this.y + 5, 12, 12);
    ellipse(this.x + 34, this.y + 15, 7, 7);}

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);}
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);}

    this.x = this.x + (this.dirX* (0, 4));
    this.y = this.y + (this.dirY* (0, 1));}
}

  function Asteroide6() {
  this.x = random(width/12, width); 
  this.y = random(height/15);
  this.dirX = 1;
  this.dirY = 1;

  this.dibujarse = function() {
    noStroke();
    fill(186, 186, 186);
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + 5, this.y + 15);
    vertex(this.x + 9, this.y + 30);
    vertex(this.x + 17, this.y + 33);
    vertex(this.x + 41, this.y + 33);
    vertex(this.x + 49, this.y + 30);
    vertex(this.x + 53, this.y + 15);
    vertex(this.x + 58, this.y);
    vertex(this.x + 40, this.y - 15);
    vertex(this.x + 18, this.y - 15);
    endShape(CLOSE);

    fill(80,90,100);
    ellipse(this.x + 20, this.y + 5, 12, 12);
    ellipse(this.x + 34, this.y + 15, 7, 7);}

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);}
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);}

    this.x = this.x + (this.dirX* (0, 4));
    this.y = this.y + (this.dirY* (0, 1));}
  
}