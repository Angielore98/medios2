var estado = 0;

var INTRO = 1;
var JUEGO = 2;
var OUTRO = 3;

var colorFondo = 100;

var elTigre;

var puntaje = 0;

var value = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  estado = INTRO;

  elTigre = new Tigrecito();
}

function draw() {
  if (estado == INTRO) {
    background(0, 0, 0);
    fill(255);
    textAlign(CENTER);
    textSize(60);
    text("INTRO", width/2, height/2);
  } else if (estado == JUEGO) {
    background(value);
    fill(255);
    textAlign(CENTER);
    textSize(60);
    text("JUEGO", width/2, height/2);

    textAlign(LEFT);
    textSize(20);
    text("P " + puntaje, 10, 30);

    elTigre.dibujarse();
    elTigre.moverse();

    if (puntaje > 10) {
      estado = OUTRO;
      puntaje = 0;
    }
  } else {
    background(200);
    fill(255);
    textAlign(CENTER);
    textSize(60);
    text("¡¡¡¡¡GANASTE!!!!!", width/2, height/2);
  }
}

function keyReleased() {
  if (estado == INTRO) {
    if (keyCode == 32) {
      estado = JUEGO;
    }
  } else if (estado == JUEGO) {
    if (keyCode == 32) {
    }
  } else {
    if (keyCode == 32) {
      estado = INTRO;
    }
  }
}

function mousePressed() {
  if (estado == INTRO) {
    estado = JUEGO;
  } else if (estado == JUEGO) {
    if (dist(mouseX, mouseY, elTigre.x, elTigre.y) < 50) {
      puntaje = puntaje + 1;
    }
  } else {
  }
  
}

function mouseDragged() {
  if (estado == INTRO) {
  } else if (estado == JUEGO) {
    colorFondo = map(mouseX, 0, width, 0, 255);

    if (dist(mouseX, mouseY, elTigre.x, elTigre.y) < 20) {
      elTigre.arrastrarse();
    }

    for (var i = 0; i < touches.length; i = i+1) {
      if (dist(touches[i].x, touches[i].y, elTigre.x, elTigre.y) < 50) {
        elTigre.arrastrarse();
      }
    }
  } else {
  }
  
  return false;

}

function Tigrecito() {
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

    fill(215, 218, 219);
    triangle(this.x + 37, this.y - 5, this.x + 47, this.y + 4, this.x + 51, this.y - 9);
    triangle(this.x + 7, this.y - 9, this.x + 12, this.y + 3, this.x + 21, this. y - 5);

    beginShape();
    vertex(this.x + 22, this.y - 5);
    vertex(this.x + 12, this.y + 5);
    vertex(this.x + 20, this.y + 25);
    vertex(this.x + 37, this.y + 25);
    vertex(this.x + 46, this.y + 5);
    vertex(this.x + 35, this.y - 5);
    endShape(CLOSE);

    fill(0, 0, 0);
    ellipse(this.x + 24, this.y + 5, 2, 2);
    ellipse(this.x + 34, this.y + 5, 2, 2);

    triangle(this.x + 22, this.y + 13, this.x + 37, this.y + 13, this.x + 29, this.y + 18);
  }

  this.moverse = function() {

    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);
    }

    if (this.y >= height/2 || this.y <= height/4) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);
    }

    this.x = this.x + (this.dirX*random(0, 4));
    this.y = this.y + (this.dirY*random(0, 4));
  }

  this.arrastrarse = function() {
    this.x = mouseX;
    this.y = mouseY;
  }
}

function deviceShaken() {
  value = value + 1;
  if (value > 255) {
    value = 0;
  }
}
