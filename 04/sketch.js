//Herramientas
var recttam=95

//Gotas
var gota1x= 28;
var gota1y=36;
var gota1tam=10;

var gota2x= 28;
var gota2y=57;
var gota2tam=10;

var gota3x= 28;
var gota3y=94;
var gota3tam=10;

var gota4x= 28;
var gota4y=130;
var gota4tam=10;

var gota5x= 28;
var gota5y=167;
var gota5tam=10;

var gota6x= 28;
var gota6y=205;
var gota6tam=10;

var gota7x= 28;
var gota7y=242;
var gota7tam=10;

var gota8x= 28;
var gota8y=279;
var gota8tam=10;

var gota9x= 28;
var gota9y=317;
var gota9tam=10;

var gota10x= 28;
var gota10y=354;
var gota10tam=10;

//Color gotas
var colorSelect = 0;
var herramienta = 0;


function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(260,260,260);}
  
  function draw() {
 //Fondo de herramientas
  noStroke();
  fill(220,220,220);
  rect(0,0,recttam,height);
 //Gota color 1 
 fill(1,2,3);
 triangle(gota1x,gota1y-16,gota1x-10,gota1y,gota1x+10,gota1y);
 ellipse(gota1x,gota1y+5,gota1tam+13,gota1tam+gota1tam);
 //Gota color 2
 fill(250,250,250);
 triangle(gota2x,gota2y,gota2x-10,gota2y+16,gota2x+10,gota2y+16);
 ellipse(gota2x,gota2y+21,gota2tam+13,gota2tam+gota2tam);
 //Gota color 3
 fill(152,28,38);
 triangle(gota3x,gota3y,gota3x-10,gota3y+16,gota3x+10,gota3y+16);
 ellipse(gota3x,gota3y+21,gota3tam+13,gota3tam+gota3tam);
 //Gota color 4
 fill(121,58,49);
 triangle(gota4x,gota4y,gota4x-10,gota4y+16,gota4x+10,gota4y+16);
 ellipse(gota4x,gota4y+21,gota4tam+13,gota4tam+gota4tam);
 //Gota color 5
 fill(238,151,52);
 triangle(gota5x,gota5y,gota5x-10,gota5y+16,gota5x+10,gota5y+16);
 ellipse(gota5x,gota5y+21,gota5tam+13,gota5tam+gota5tam);
  //Gota color 6
 fill(248,196,120);
 triangle(gota6x,gota6y,gota6x-10,gota6y+16,gota6x+10,gota6y+16);
 ellipse(gota6x,gota6y+21,gota6tam+13,gota6tam+gota6tam);
 //Gota color 7
 fill(124,155,73);
 triangle(gota7x,gota7y,gota7x-10,gota7y+16,gota7x+10,gota7y+16);
 ellipse(gota7x,gota7y+21,gota7tam+13,gota7tam+gota7tam);
 //Gota color 8
 fill(52,137,131);
 triangle(gota8x,gota8y,gota8x-10,gota8y+16,gota8x+10,gota8y+16);
 ellipse(gota8x,gota8y+21,gota8tam+13,gota8tam+gota8tam);
 //Gota color 9
 fill(33,96,197);
 triangle(gota9x,gota9y,gota9x-10,gota9y+16,gota9x+10,gota9y+16);
 ellipse(gota9x,gota9y+21,gota9tam+13,gota9tam+gota9tam);
 //Gota color 10
 fill(166,136,227);
 triangle(gota10x,gota10y,gota10x-10,gota10y+16,gota10x+10,gota10y+16);
 ellipse(gota10x,gota10y+21,gota10tam+13,gota10tam+gota10tam);
 fill(20,220,220); 
 
 //Herramientas
 //Pincel estándar
 fill(1,2,3);
 stroke(1,2,3);
 strokeWeight(0.9)
 beginShape();
 vertex(70,25);
 vertex(77,27);
 vertex(65,42);
 vertex(58,40);
 endShape(CLOSE);
 noFill();
 beginShape();
 vertex(70,25);
 vertex(77,27);
 vertex(79,24);
 vertex(73,22);
 endShape(CLOSE);
 triangle(65,42,58,40,56,47);
 ellipse(58,45,1,1);
 //Pincel grande
 fill(1,2,3);
 stroke(1,2,3);
 strokeWeight(0.9)
 beginShape();
 vertex(70,57);
 vertex(79,62);
 vertex(67,78);
 vertex(58,72);
 endShape(CLOSE);
 noFill();
 beginShape();
 vertex(70,57);
 vertex(79,62);
 vertex(81,59);
 vertex(73,54);
 endShape(CLOSE);
 triangle(66,78,58.5,72,59,80);
 ellipse(60,79,1.5,1.5);
 strokeWeight(4);
 line(54,83,74,83);
 //Pincel pequeño
 fill(1,2,3);
 stroke(1,2,3);
 strokeWeight(0.9)
 beginShape();
 vertex(70,99);
 vertex(74,101);
 vertex(62,117);
 vertex(58,115);
 endShape(CLOSE);
 noFill();
 beginShape();
 vertex(70,99);
 vertex(74,101);
 vertex(76.5,97);
 vertex(73,95);
 endShape(CLOSE);
 triangle(62,117,58,115,56,121);
 ellipse(57,120,1,1);
 line(54,123,74,123);
 //Borrador
 fill(1,2,3);
 stroke(1,2,3);
 strokeWeight(0.9)
 beginShape();
 vertex(64,132);
 vertex(74,135);
 vertex(71,145);
 vertex(61,142);
 endShape(CLOSE);
 fill(220,220,220);
 beginShape();
 vertex(71,145);
 vertex(68,155);
 vertex(58,153);
 vertex(61,142);
 endShape(CLOSE);
 line(52,156,76,156.5);
 //Rombos con estela
 beginShape();
 vertex(66,168);
 vertex(78,182);
 vertex(66,198);
 vertex(54,182);
 endShape(CLOSE);
 //Spray
 noFill();
 stroke(1,2,3);
 strokeWeight(0.9)
 rect(62,214,13,20);
 rect(64,209,9,5);
 ellipse(66,211,2,2);
 line(72,217,72,226);
 ellipse(60,209,1,1);
 ellipse(57,208,1,1);
 ellipse(54,207,1,1);
 ellipse(60,212,1,1);
 ellipse(57,212,1,1);
 ellipse(54,212,1,1);
 ellipse(54,217,1,1);
 ellipse(57,215,1,1);
 //Ellipses
 noFill();
 stroke(1,2,3);
 strokeWeight(0.9)
 ellipse(64,258,22,26);
 ellipse(64,258,29,8);
 ellipse(64,258,9,18);
 ellipse(64,258,19,18);
 //Arcos
 noFill();
 stroke(1,2,3);
 strokeWeight(0.9);
 arc(64,307,28,38,PI, TWO_PI);
 arc(64,307,8,35,PI, TWO_PI);
 arc(64,307,22,48,PI, TWO_PI);
 arc(64,307,14,27,PI, TWO_PI);
 //Corazón
 noStroke();
 fill(1,2,3);
 arc(57,326,13,13,PI, TWO_PI); 
 arc(69,326,13,13,PI, TWO_PI);
 triangle(50.5,326,76,326,63.5,344);
 fill(220,220,220);
 arc(57,326,11,11,PI, TWO_PI); 
 arc(69,326,11,11,PI, TWO_PI);
 triangle(51.5,326,75,326,63.5,342);
 //Estrella
 fill(1,2,3);
 beginShape();
 vertex(63.5,352);
 vertex(68.5,362);
 vertex(77.5,364);
 vertex(69.5,370);
 vertex(70.5,381);
 vertex(63.5,374);
 vertex(56.5,381);
 vertex(57.5,370);
 vertex(50.5,364);
 vertex(58.5,362);
 endShape(CLOSE);
 fill(220,220,220);
 beginShape();
 vertex(63.5,355);
 vertex(67.5,363);
 vertex(75.5,364);
 vertex(67.5,370);
 vertex(69.5,379);
 vertex(63.5,372);
 vertex(57.5,379);
 vertex(59.5,370);
 vertex(52.5,364);
 vertex(59.5,363);
 endShape(CLOSE);
 //Reiniciar dibujo
 strokeWeight(3);
 stroke(173,1,1);
 line(63.5,392,73,401);
 line(73,401,66.5,413);
 line(63.5,392,53,400);
 line(53,400,59,407);
 triangle(56,408,60,404,60,408);
    
 if (mouseIsPressed) {
		
    //Herramientas
   //Pincel estandar
   if (mouseX > 51 && mouseX < 76 &&
			mouseY > 21 && mouseY < 50) {
     herramienta=0;}
   //Pincel más grande
   if (mouseX > 51 && mouseX < 76 &&
			mouseY > 58 && mouseY < 87) {
     herramienta=1;}
   //Pincel más pequeño
   if (mouseX > 51 && mouseX < 76 &&
			mouseY > 95 && mouseY < 124) {
     herramienta=2;}
   //Borrador
   if (mouseX > 51 && mouseX < 76 &&
			mouseY > 132 && mouseY < 160) {
     herramienta=3;}
   //Reiniciar dibujo
   if (mouseX > 51 && mouseX < 76 &&
			mouseY > 168 && mouseY < 197) {
     herramienta=4;}
   //Spray
   if (mouseX > 51 && mouseX < 76 &&
			mouseY > 205 && mouseY < 234) {
     herramienta=5;}
   //Ellipses
		if (mouseX > 51 && mouseX < 76 &&
			mouseY > 242 && mouseY < 271) {
     herramienta=6;}
   //Arcos
   if (mouseX > 51 && mouseX < 76 &&
			mouseY > 279 && mouseY < 308) {
     herramienta=7;}
   //Corazón
   if (mouseX > 51 && mouseX < 76 &&
			mouseY > 316 && mouseY < 345) {
     herramienta=8;}
   //Estrella
   if (mouseX > 51 && mouseX < 76 &&
			mouseY > 353 && mouseY < 382) {
     herramienta=9;}
   //Reiniciar dibujo
   if (mouseX > 51 && mouseX < 76 &&
			mouseY > 390 && mouseY < 419) {
     herramienta=10;}
   
   //Colores
   //Gota 1
		if (mouseX > gota1x-12 && mouseX < gota1x+13 &&
			mouseY > gota1y && mouseY < gota1y+22) {
			colorSelect = 0;}
   //Gota 2
		if (mouseX > gota2x-12 && mouseX < gota2x+13 &&
			mouseY > gota2y && mouseY < gota2y+32) {
			colorSelect = 1;}
   //Gota 3
		if (mouseX > gota3x-12 && mouseX < gota3x+13 &&
			mouseY > gota3y && mouseY < gota3y+32) {
			colorSelect = 2;}
   //Gota 4
		if (mouseX > gota4x-12 && mouseX < gota4x+13 &&
			mouseY > gota4y && mouseY < gota4y+32) {
			colorSelect = 3;}
   //Gota 5
		if (mouseX > gota5x-12 && mouseX < gota5x+13 &&
			mouseY > gota5y && mouseY < gota5y+32) {
			colorSelect = 4;}
   //Gota 6
		if (mouseX > gota6x-12 && mouseX < gota6x+13 &&
			mouseY > gota6y && mouseY < gota6y+32) {
			colorSelect = 5;}
   //Gota 7
		if (mouseX > gota7x-12 && mouseX < gota7x+13 &&
			mouseY > gota7y && mouseY < gota7y+32) {
			colorSelect = 6;}
   //Gota 8
		if (mouseX > gota8x-12 && mouseX < gota8x+13 &&
			mouseY > gota8y && mouseY < gota8y+32) {
			colorSelect = 7;}
   //Gota 9
		if (mouseX > gota9x-12 && mouseX < gota9x+13 &&
			mouseY > gota9y && mouseY < gota9y+32) {
			colorSelect = 8;}
   //Gota 10
		if (mouseX > gota10x-12 && mouseX < gota10x+13 &&
			mouseY > gota10y && mouseY < gota10y+32) {
			colorSelect = 9;}
     
   //Colores
   strokeWeight(0.1);
   //Gota 1
   if (colorSelect == 0){
      stroke(1,2,3);
			fill(1,2,3);}
   //Gota 2
   if (colorSelect == 1){
      stroke(250,250,250);
			fill(250,250,250);}
   //Gota 3
   if (colorSelect == 2){
      stroke(152,28,38);
			fill(152,28,38);}
   //Gota 4
   if (colorSelect == 3){
      stroke(121,58,49);
			fill(121,58,49);}
   //Gota 5
   if (colorSelect == 4){
      stroke(238,151,52);
			fill(238,151,52);}
   //Gota 6
   if (colorSelect == 5){
      stroke(248,196,120);
			fill(248,196,120);}
   //Gota 7
   if (colorSelect == 6){
      stroke(124,155,73);
			fill(124,155,73);}
   //Gota 8
   if (colorSelect == 7){
      stroke(52,137,131);
			fill(52,137,131);}
   //Gota 9
   if (colorSelect == 8){
      stroke(33,96,197);
			fill(33,96,197);}
   //Gota 10
   if (colorSelect == 9){
      stroke(166,136,227);
			fill(166,136,227);}
   
   //Herramientas
   //Pincel estándar
   if (herramienta == 0) { 
   ellipse(mouseX - 10, mouseY - 10, 8, 8);}
   //Pincel más grande
   if (herramienta == 1) { 
   ellipse(mouseX - 10, mouseY - 10, 16, 16);} 
   //Pincel más pequeño
   if (herramienta == 2) { 
   ellipse(mouseX - 10, mouseY - 10, 4, 4);}
   //Borrador
   if (herramienta == 3) {
   noStroke();
   fill(260,260,260);
   rect(mouseX - 10, mouseY - 10, 12, 12);} 
   //Rombos con estela
   if (herramienta == 4) { 
   beginShape();
   stroke(1,2,3);
   strokeWeight(1);
   vertex(mouseX,mouseY);
   vertex(mouseX+12,mouseY+20);
   vertex(mouseX,mouseY+40);
   vertex(mouseX-12,mouseY+20);
   endShape(CLOSE);}
   //Spray
   if (herramienta == 5) { 
   ellipse(mouseX + 2, mouseY+4, 0.1, 0.1);
   ellipse(mouseX - 2, mouseY+4, 0.1, 0.1);
   ellipse(mouseX, mouseY+4, 0.1, 0.1);
   ellipse(mouseX + 4, mouseY+2, 0.1, 0.1);
   ellipse(mouseX - 4, mouseY+2, 0.1, 0.1);
   ellipse(mouseX + 2, mouseY+2, 0.1, 0.1);
   ellipse(mouseX - 2, mouseY+2, 0.1, 0.1);
   ellipse(mouseX, mouseY+2, 0.1, 0.1);
   ellipse(mouseX + 6, mouseY, 0.1, 0.1);
   ellipse(mouseX - 6, mouseY, 0.1, 0.1);
   ellipse(mouseX + 4, mouseY, 0.1, 0.1);
   ellipse(mouseX - 4, mouseY, 0.1, 0.1);
   ellipse(mouseX + 2, mouseY, 0.1, 0.1);
   ellipse(mouseX - 2, mouseY, 0.1, 0.1);
   ellipse(mouseX, mouseY, 0.1, 0.1);
   ellipse(mouseX + 6, mouseY - 2, 0.1, 0.1);
   ellipse(mouseX - 6, mouseY - 2, 0.1, 0.1);
   ellipse(mouseX + 4, mouseY - 2, 0.1, 0.1);
   ellipse(mouseX - 4, mouseY - 2, 0.1, 0.1);
   ellipse(mouseX + 2, mouseY - 2, 0.1, 0.1);
   ellipse(mouseX - 2, mouseY - 2, 0.1, 0.1);
   ellipse(mouseX, mouseY-2, 0.1, 0.1);
   ellipse(mouseX + 6, mouseY - 4, 0.1, 0.1);
   ellipse(mouseX - 6, mouseY - 4, 0.1, 0.1);
   ellipse(mouseX + 4, mouseY - 4, 0.1, 0.1);
   ellipse(mouseX - 4, mouseY - 4, 0.1, 0.1);
   ellipse(mouseX + 2, mouseY - 4, 0.1, 0.1);
   ellipse(mouseX - 2, mouseY - 4, 0.1, 0.1);
   ellipse(mouseX, mouseY-4, 0.1, 0.1);
   ellipse(mouseX + 4, mouseY-6, 0.1, 0.1);
   ellipse(mouseX - 4, mouseY-6, 0.1, 0.1);
   ellipse(mouseX + 2, mouseY-6, 0.1, 0.1);
   ellipse(mouseX - 2, mouseY-6, 0.1, 0.1);
   ellipse(mouseX, mouseY-6, 0.1, 0.1);
   ellipse(mouseX + 2, mouseY-8, 0.1, 0.1);
   ellipse(mouseX - 2, mouseY-8, 0.1, 0.1);
   ellipse(mouseX, mouseY-8, 0.1, 0.1);} 
   //Ellipses
	 if (herramienta == 6) { 
   noFill();
   ellipse(width/2+50,height/2,mouseX-300,mouseY-300);}
   //Arcos
   if (herramienta == 7) { 
   noFill();
   arc(width/2+50,height,mouseX+250,mouseY+250,PI, TWO_PI);}
   //Corazón
   noStroke();
   if (herramienta == 8) {
   arc(mouseX-5,mouseY-15,10,10,PI, TWO_PI); 
   arc(mouseX+5,mouseY-15,10,10,PI, TWO_PI);
   triangle(mouseX,mouseY,mouseX-10,mouseY-15,mouseX+10,mouseY-15);}
   //Estrella
   if (herramienta == 9) {
   stroke(1,2,3);
   strokeWeight(0.7);
	 beginShape();
   vertex(mouseX,mouseY);
   vertex(mouseX+5,mouseY+12);
   vertex(mouseX+17,mouseY+13);
   vertex(mouseX+8,mouseY+22);
   vertex(mouseX+11,mouseY+36);
   vertex(mouseX,mouseY+26);
   vertex(mouseX-11,mouseY+36);
   vertex(mouseX-8,mouseY+22);
   vertex(mouseX-17,mouseY+13);
   vertex(mouseX-5,mouseY+12);
   endShape(CLOSE);}
   //Reiniciar dibujo
   if (herramienta == 10) { 
   fill(260,260,260);
   rect(0, 0,windowWidth, windowHeight);}
 }
 } 