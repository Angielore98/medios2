//Nave
var b;
//Estrella
var c;
//Asteroide
var a;
//Asteroide2
var a;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new bola();
  c = new comida();
  a = new Asteroide();
  a2 = new Asteroide2();
}

function draw() {
  background(0, 0, 0);
  //Estrellas de fondo
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

  b.dibujarse();
  b.moverse();
  c.dibujarse();
  a.dibujarse();
  a.moverse();
  a2.dibujarse();
  a2.moverse();

  //Interacción nave-asteroides
  if (dist(a.x, a.y, b.x, b.y)  < 37) {
          b.morir();}
    else if (dist(a2.x, a2.y, b.x, b.y)  < 37) {
          b.morir();}
  //Interacción nave-estrella   
  if (dist(b.x, b.y, c.x, c.y) < 37) {
    c.morir();}
}

 //Nave
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
 //Estrella
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
 //Asteroide1
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
  //Asteroide2
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