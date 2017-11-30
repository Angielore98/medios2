//Tenedores y todo organizado

var x = [];
var y = [];
var cant = 50;

function setup() { 
  frameRate (4);
  createCanvas(700, 452);
  for(var i = 0; i < cant; i= i+1) {
   x [i] = random (450, 320);
   y [i] = random (200, 330);
  } } 
 

function draw() { 
  background(255);
  strokeWeight(1.5);
  stroke(1,2,3);
  fill(255,255,255);
  //Individual
  fill(255,255,255);
  rect(80,50,565,350);
  //Pattern
  for(var numCuad = 0;numCuad < 1.4; numCuad = numCuad+0.08) {
  noStroke();
  fill(1,2,3);
  //1ra fila
  rect(94,222*numCuad+70,35,7);
  rect(139,222*numCuad+70,35,7);
  rect(184,222*numCuad+70,35,7);
  rect(229,222*numCuad+70,35,7);
  rect(274,222*numCuad+70,35,7);
  rect(319,222*numCuad+70,35,7);
  rect(364,222*numCuad+70,35,7);
  rect(409,222*numCuad+70,35,7);
  rect(454,222*numCuad+70,35,7);
  rect(502,222*numCuad+70,35,7);
  rect(549,222*numCuad+70,35,7);
  rect(597,222*numCuad+70,35,7);}
  //Servilleta 1
  fill(255,255,255);
  strokeWeight(1.5);
  stroke(1,2,3);
  rect(95,-1,115,150);
  line(180,-1,95,150);
  //Servilleta 2
  rect(515,301,117,154);
  line(608,452,515,301);
  //Plato
  ellipse(360,226,310);
  ellipse(360,226,280);
  //Pancake
  fill(1,2,3);
  ellipse(360,226,220);
  fill(255,255,255);
  fill(255,255,255);
  stroke(255,255,255);
  triangle(360,226,460,320,370,340);
  triangle(360,226,460,320,370,340);
  triangle(360,226,226,200,390,100);
  triangle(270,126,226,200,390,100);
  triangle(360,226,435,340,490,195);

  //Tenedor arriba
  stroke(1,2,3);
  fill(1,2,3);
  rect(132,50,37,40);
  rect(132,90,7,40);
  rect(147,90,7,40);
  rect(162,90,7,40);
  rect(142,0,18,80);
  //Tenedor abajo
  rect(555,360,37,40);
  rect(555,320,7,40);
  rect(570,320,7,40);
  rect(585,320,7,40);
  rect(565,400,18,80);
  
  for(var i = 0; i < cant; i= i +1) {
   x [i] = x [i] + random (-2);
   y [i] = y [i] + random (-2);

   rect (x[i], y[i], 1, 1);}
  
  


  saveCanvas(name+frameCount, 'jpg');
  
}
