 var misPeces;
 var misTrans;
 


 function preload () {
 misPeces = loadImage('sos-course-fishes-classroom_2x.jpg');
 misTrans = loadImage('Filtro 2.png');}


 function setup() { 
  createCanvas(800, 700);
   
  misPeces.mask(misTrans);
} 

function draw() { 
  background (255,255,255);
  tint(250,112,174);
  image(misPeces, 0, 0);
 
}