var r, g, b;

//var gacelas;
var gacelas = [];
var numGacelas = 100;

//var arbustos;
var arbustos = [];
var numArbustos = 50;

//var leon;
var manada = [];
var numLeones = 4;

//var camaleón;
var camaleón = [];
var numCamaleones = 4;

//var árboles;
var árbol = [];
var numÁrboles = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
	r = random(255);
  g = random(255);
  b = random(255);

  //gacelas = new presa();
  for (var i = 0; i < numGacelas; i = i + 1) {
    gacelas [i] = new Presa(); }
	
	//arbustos = new arbusto();
  for (var i = 0; i < numArbustos; i = i + 1) {
    arbustos [i] = new Arbusto(); }

  //leon = new predador();
  for (var i = 0; i < numLeones; i = i + 1) {
    manada[i] = new Predador();  } 

	//camaleón = new camaleón();
  for (var i = 0; i < numCamaleones; i = i + 1) {
    camaleón[i] = new Camaleón();  }
	
	//árboles = new bosque();
  for (var i = 0; i < numÁrboles; i = i + 1) {
    árbol[i] = new Bosque();  }
}

function draw() {
  background(190,213,102);
 //Leones
  for (var i = 0; i < numLeones; i = i + 1) {
    manada [i].dibujarse();
    manada [i].moverse(); }
	
	 //Arbustos
  for (var i = 0; i < numArbustos; i = i + 1) {
    arbustos [i].dibujarse();}

	//Camaleones
	for (var i = 0; i < numCamaleones; i = i + 1) {
    camaleón [i].dibujarse();
	  camaleón [i].moverse();}
	
 //Gacelas
  for (var i = 0; i < numGacelas; i = i + 1) {
    gacelas [i].dibujarse();
    gacelas [i].moverse();
	//lasGacelas[i].crecer();
  for (var j = 0; j < numLeones; j = j + 1) {
      var distCentro = dist(manada[j].x, manada[j].y, gacelas [i].x, gacelas [i].y);

      if (distCentro < manada[j].tamano/2) {
        gacelas [i].morir();  }    }  }
	
	//Árboles
	for (var i = 0; i < numÁrboles; i = i + 1) {
    árbol [i].dibujarse();
	//lasGacelas[i].crecer();
  for (var u = 0; u < numGacelas; u = u + 1) {
      var distCeentro = dist(gacelas[u].x, gacelas[u].y, árbol [i].x, árbol [i].y);

      if (distCeentro < gacelas[u].tamano/2) {
        árbol [i].morir();  }    } 
	}
	
}

//Interacciones
//Nuevo león
function keyReleased() {
  if (keyCode == 32) {
    numLeones = numLeones+1;
    manada[manada.length] = new Predador();}   
//Nuevos árbustos amarillos
	if (keyCode == 13) {
    numArbustos = numArbustos-1;
    arbustos[arbustos.length] = new Arbusto();} 
//Camaleones 
	if (keyCode == 20) {
		numCamaleones = numCamaleones+1
		camaleón[camaleón.length] = new Camaleón()
		
	}
}

//Bosque árboles
function Bosque() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 15;
  this.viva = true;
 
  this.dibujarse = function() {
   if (this.viva == true) { 
		fill(70,150,100);
		noStroke();
    ellipse(this.x, this.y, this.tamano, this.tamano);
	  ellipse(this.x+7, this.y+7, this.tamano, this.tamano);
	  ellipse(this.x-7, this.y-7, this.tamano, this.tamano);
	  ellipse(this.x, this.y-8, this.tamano, this.tamano);}  }
 
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0.6);  }

  this.morir = function() {
  this.viva = false;}}

//Manada presa
function Presa() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 20;
  this.viva = true;

  this.dibujarse = function() {
		stroke(1,2,3);
		strokeWeight(2);
    if (this.viva == true) {
      line(this.x, this.y-this.tamano, this.x, this.y+this.tamano);
      line(this.x-this.tamano, this.y, this.x+this.tamano, this.y);
			fill(210,150,130);
		  triangle(this.x,this.y,this.x+5,this.y+15,this.x-15,this.y-5);}  }
 
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0.6);  }

  this.morir = function() {
    this.viva = false;  }}

//Arbustos amarillos
function Arbusto() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = 10;

  this.dibujarse = function() {
		fill(249,238,67);
		noStroke();
    ellipse(this.x, this.y, this.tamano, this.tamano);  }}

//Población de camaleones
function Camaleón() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = 12;

  this.dibujarse = function() {
		fill(r, g, b);
		noStroke();
    ellipse(this.x, this.y, this.tamano, this.tamano);
	  rect(this.x+6, this.y-6, this.tamano+10, this.tamano);
	  rect(this.x+16, this.y-2, this.tamano+22, this.tamano-8);}

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);  }}
	
//Manada predador
function Predador() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = 50;

  this.dibujarse = function() {
		fill(234,238,67);
		stroke(240,140,55);
		strokeWeight(5);
    ellipse(this.x, this.y, this.tamano, this.tamano);  }

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);    }
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);    }

    this.x = this.x + (this.dirX*random(0, 2));
    this.y = this.y + (this.dirY*random(0, 2));  }
	

	}