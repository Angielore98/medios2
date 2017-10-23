 var misPeces;
 var x = 0;
 var y = 0;

 function preload () {
 misPeces = loadImage('sos-course-fishes-classroom_2x.jpg');}

 function setup() { 
 createCanvas(800, 700);
} 

function draw() { 
  misPeces.loadPixels();
  var pix = misPeces.get (x,y);
  print(pix);
  var miRojo = pix[0];
  var miVerde = pix[1];
  var miAzul = pix[2];
  var miTrans = pix[3];
  
  noStroke();
  fill(miRojo,miVerde,miAzul,miTrans);
  ellipse (x, y, 15, 5);
  triangle (x, y, x+10, y-3, x+10,y+3);
  
  x = x + 21;
  if( x > misPeces.width) {
    x = 0;
    y = y + 10;}
}