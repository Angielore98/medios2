var x = 0;
var dirX = 1;
var velX = 2;
var miCanc;

function preload() {
 miCanc = loadSound ('assets/069 - akira ifukube - godzilla - main title (1954).mp3');}

function setup() { 
  createCanvas(500, 500);
  background(251,251,251);
  miCanc.setVolume(1);
  miCanc.play();
  comienzo = millis ();
  print(comienzo);
} 

 function draw() { 
//Pantalla negra
 noStroke();
 fill(250,250,250);
 if (millis() > 0+comienzo && millis() < 0300+comienzo) {
 rect(0,0, 500,500); }
 fill(1,2,3);
 if (millis() > 0300+comienzo && millis() <600+comienzo) {
 rect(0,0,500,500);
 }
   
 //Rectángulos cayendo
 strokeWeight (2);
 stroke(1,2,3);
 if (millis() > 600+comienzo && millis() < 1300+comienzo) {
 fill(220,220,220);
 rect(-1,x-1,600,17); 
 x = x + (29 * dirX);
 if (x < 0||x > height-10){
 x = (height)-10; }
 }
 //fondo negro
 if (millis() > 1300+comienzo && millis() < 15900+comienzo) {
 fill (1,2,3);
 rect(0,0,500,500);} 
 
 //líneas primera vez
 stroke(1,2,3);
 strokeWeight(2);
 //1
 if (millis() > 1500+comienzo && millis() <4400+comienzo) {
 fill (250,250,250);
 rect(0,0-1,72,503);
 } else if (millis() > 4400+comienzo && millis() <14000+comienzo) {
 fill (210,210,210)
 rect(0,0-1,72,503);}
 //2
 if (millis() > 1900+comienzo && millis() < 5500+comienzo) {
 fill (250,250,250);
 rect(71,0-1,72,503); 
 } else if (millis() > 2000+comienzo && millis() <14000+comienzo) {
 fill (225,225,225)
 rect(71,0-1,72,503);}
 //3
 if (millis() > 2300+comienzo && millis() < 6300+comienzo) {
 fill (250,250,250);
 rect(143,0-1,72,503);
 } else if (millis() > 2400+comienzo && millis() < 14000+comienzo) {
 fill (190,190,190)
 rect(143,0-1,72,503);}
 //4
 if (millis() > 2700+comienzo && millis() < 5100+comienzo) {
 fill (250,250,250);
 rect(215,0-1,72,503);
 } else if (millis() > 2800+comienzo && millis() <14000+comienzo) {
 fill (80,80,80)
 rect(215,0-1,72,503);}
 //5
 if (millis() > 3100+comienzo && millis() < 6700+comienzo) {
 fill (250,250,250);
 rect(286,0-1,72,503);
 } else if (millis() > 3200+comienzo && millis() <14000+comienzo) {
 fill (110,110,110)
 rect(286,0-1,72,503);}
 //6
 if (millis() > 3500+comienzo && millis() < 5600+comienzo) {
 fill (250,250,250);
 rect(357,0-1,72,503);
 } else if (millis() > 3600+comienzo && millis() <14000+comienzo) {
 fill (150,150,150)
 rect(357,0-1,72,503);}
 //7
 if (millis() > 3900+comienzo && millis() < 5400+comienzo) {
 fill (250,250,250);
 rect(428,0-1,72,503);
 } else if (millis() > 4000+comienzo && millis() <14000+comienzo) {
 fill (100,100,100)
 rect(428,0-1,72,503);}
   
 //2nda vez
 //1
 if (millis() > 5900+comienzo && millis() <14000+comienzo) {
 fill (50,50,50);
 rect(0,0-1,72,503);}
 //2
 if (millis() > 6300+comienzo && millis() < 14000+comienzo) {
 fill (70,70,70);
 rect(357,0-1,72,503);}
 //3
 if (millis() > 6700+comienzo && millis() < 14000+comienzo) {
 fill (230,230,230);
 rect(143,0-1,72,503);}
 //4
 if (millis() > 7100+comienzo && millis() < 14000+comienzo) {
 fill (35,35,35);
 rect(71,0-1,72,503);}
 //5
 if (millis() > 7300+comienzo && millis() < 14000+comienzo) {
 fill (165,165,165);
 rect(286,0-1,72,503);}
 //6
 if (millis() > 7500+comienzo && millis() < 14000+comienzo) {
 fill (130,130,130);
 rect(215,0-1,72,503);}
 //7
  if (millis() > 7600+comienzo && millis() < 14000+comienzo) {
 fill (105,105,105);
 rect(428,0-1,72,503); }
 //8
 if (millis() > 8000+comienzo && millis() < 14000+comienzo) {
 fill (65,65,65);
 rect(143,0-1,72,503);}
 //9
 if (millis() > 8300+comienzo && millis() < 14000+comienzo) {
 fill (120,120,120);
 rect(357,0-1,72,503);}
 //10
 if (millis() > 8600+comienzo && millis() <14000+comienzo) {
 fill (205,205,205);
 rect(0,0-1,72,503);}
 //11
 if (millis() > 9000+comienzo && millis() < 14000+comienzo) {
 fill (95,95,95);
 rect(286,0-1,72,503);}
 //12
 if (millis() > 9100+comienzo && millis() < 14000+comienzo) {
 fill (55,55,55);
 rect(357,0-1,72,503);}
 //13  
 if (millis() > 9200+comienzo && millis() <14000+comienzo) {
 fill (200,200,200);
 rect(0,0-1,72,503);}
 //14
 if (millis() > 9300+comienzo && millis() < 14000+comienzo) {
 fill (170,170,170);}
 //15
 if (millis() > 9700+comienzo && millis() < 14000+comienzo) {
 fill (140,140,140);
 rect(357,0-1,72,503);}
  //16
 if (millis() > 9900+comienzo && millis() < 14000+comienzo) {
 fill (110,110,110);
 rect(215,0-1,72,503);}
 //17
 if (millis() > 10200+comienzo && millis() < 14000+comienzo) {
 fill (85,85,85);
 rect(143,0-1,72,503);}
 //18
 
 //Cambio a blanco
 if (millis() > 11000+comienzo && millis() < 14000+comienzo) {
 stroke(250,250,250);
 strokeWeight(2);
 fill (1,2,3);
 rect(0,0-1,72,503);
 rect(71,0-1,72,503);
 rect(143,0-1,72,503);
 rect(215,0-1,72,503);
 rect(286,0-1,72,503);
 rect(357,0-1,72,503);
 rect(428,0-1,72,503);}
 //Invertir cambio
 if (millis() > 11900+comienzo && millis() < 14000+comienzo) {
 stroke(1,2,3);
 strokeWeight(2);
 fill (250,250,250);
 rect(0,0-1,72,503);
 rect(71,0-1,72,503);
 rect(143,0-1,72,503);
 rect(215,0-1,72,503);
 rect(286,0-1,72,503);
 rect(357,0-1,72,503);
 rect(428,0-1,72,503);}
 //Cambio a negro
 if (millis() > 12800+comienzo && millis() < 14500+comienzo) {
 stroke(250,250,250);
 strokeWeight(2);
 fill (1,2,3);
 rect(0,0-1,72,503);
 rect(71,0-1,72,503);
 rect(143,0-1,72,503);
 rect(215,0-1,72,503);
 rect(286,0-1,72,503);
 rect(357,0-1,72,503);
 rect(428,0-1,72,503);}

 //Rectngulos cayendo  
 //fila 2
 if (millis() > 12900+comienzo && millis() < 14500+comienzo) {
 fill(240,240,240);
 rect(86,x-20,50,47); 
 x = x + (10 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //fila 6
 if (millis() > 12900+comienzo && millis() < 14500+comienzo) {
 fill(240,240,240);
 rect(366,x-20,50,47); 
 x = x + (10 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
  
 //Aparición negro
 if (millis() > 15500+comienzo && millis() < 16000+comienzo) {
 stroke(250,250,250);
 strokeWeight(2);
 fill (1,2,3);
 rect(0,0-1,72,503);
 rect(71,0-1,72,503);
 rect(143,0-1,72,503);
 rect(215,0-1,72,503);
 rect(286,0-1,72,503);
 rect(357,0-1,72,503);
 rect(428,0-1,72,503);}
  
 //líneas de rectángulos
 if (millis() > 33000+comienzo && millis() < 40000+comienzo) {
 fill (1,2,3);
 rect(0,0,500,500);} 
 //rect 1
 if (millis() > 16000+comienzo && millis() < 40000+comienzo) {
 fill(190,190,190);
 rect(15,x-20,50,17); 
 x = x + (9 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 7
 if (millis() > 16000+comienzo && millis() < 40000+comienzo) {
 fill(190,190,190);
 rect(436,x-20,50,17); 
 x = x + (11 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 2
 if (millis() > 19100+comienzo && millis() < 40000+comienzo) {
 fill(190,190,190);
 rect(86,x-20,50,17); 
 x = x + (11 * dirX);
 if (x < 0||x > 600){
 x = 0; }}  
 //rect 6
 if (millis() > 19100+comienzo && millis() < 40000+comienzo) {
 fill(190,190,190);
 rect(366,x-20,50,17); 
 x = x + (5 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 3
 if (millis() > 22500+comienzo && millis() < 40000+comienzo) {
 fill(190,190,190);
 rect(156,x-20,50,17); 
 x = x + (6 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 5
 if (millis() > 22500+comienzo && millis() < 40000+comienzo) {
 fill(190,190,190);
 rect(296,x-20,50,17); 
 x = x + (6 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 4
  if (millis() > 26000+comienzo && millis() < 40000+comienzo) {
 fill(190,190,190);
 rect(226,x-20,50,17); 
 x = x + (8 * dirX);
 if (x < 0||x > 600){
 x = 0; }}

 //Cambio de color
 //1 y 7
 //rect 1
 if (millis() > 29500+comienzo && millis() < 40000+comienzo) {
 fill(100,100,100);
 rect(15,x-20,50,17); 
 x = x + (9 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 7
 if (millis() > 29500+comienzo && millis() < 40000+comienzo) {
 fill(100,100,100);
 rect(436,x-20,50,17); 
 x = x + (9 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //2 y 6
 //rect 2
 if (millis() > 30000+comienzo && millis() < 40000+comienzo) {
 fill(80,80,80);
 rect(86,x-20,50,17); 
 x = x + (5 * dirX);
 if (x < 0||x > 600){
 x = 0; }}  
 //rect 6
 if (millis() > 30000+comienzo && millis() < 40000+comienzo) {
 fill(80,80,80);
 rect(366,x-20,50,17); 
 x = x + (5 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //3 y 5
 //rect 3
 if (millis() > 31000+comienzo && millis() < 40000+comienzo) {
 fill(50,50,50);
 rect(156,x-20,50,17); 
 x = x + (6 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 5
 if (millis() > 31000+comienzo && millis() < 40000+comienzo) {
 fill(50,50,50);
 rect(296,x-20,50,17); 
 x = x + (6 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 4
  if (millis() > 32000+comienzo && millis() < 40000+comienzo) {
 fill(30,30,30);
 rect(226,x-20,50,17); 
 x = x + (8 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
   
 //Fondo negro
 noStroke();
 fill(1,2,3);
 if (millis() > 34200+comienzo && millis() < 46000+comienzo) {
 rect(0,0, 500,500); }
   
 //Cuadrados
 fill(220,220,220);
 noStroke();
 if (millis ()> 34300+comienzo && millis() < 34600+comienzo) {
 rect (50,50,400,400);}
 if (millis ()> 35000+comienzo && millis() < 35600+comienzo) {
 rect (70,70,360,360);}
 if (millis ()> 36000+comienzo && millis() < 36100+comienzo) {
 rect (100,100,300,300);} 
 if (millis ()> 36200+comienzo && millis() < 36300+comienzo) {
 rect (110,110,290,290);} 
 if (millis ()> 36400+comienzo && millis() < 36500+comienzo) {
 rect (120,120,260,260);} 
 if (millis ()> 366000+comienzo && millis() < 36700+comienzo) {
 rect (135,135,230,230);}
 if (millis ()> 36800+comienzo && millis() < 36900+comienzo) {
 rect (145,145,200,200);}
 if (millis ()> 37000+comienzo && millis() < 37100+comienzo) {
 rect (160,160,160,160);}
 if (millis ()> 37200+comienzo && millis() < 37300+comienzo) {
 rect (170,170,140,140);}
 if (millis ()> 37400+comienzo && millis() < 37500+comienzo) {
 rect (190,190,110,110);}
   
 //Cuadrícula
 for(var numCuad = 0;numCuad < 0.32; numCuad = numCuad+0.06) {
  noStroke();
  fill(100,100,100);
  if (millis ()> 38000+comienzo && millis() < 38300+comienzo) {
  rect(130,522*numCuad+150,26,25);
  rect(200,522*numCuad+150,26,25);
  rect(270,522*numCuad+150,26,25);
  rect(340,522*numCuad+150,26,25);}
  if (millis ()> 38300+comienzo && millis() < 38500+comienzo) {
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);
  }else if (millis ()> 38500+comienzo && millis() < 38700+comienzo) {
  rect(10,1222*numCuad+60,26,25);
  rect(100,1222*numCuad+60,26,25);
  rect(195,1222*numCuad+60,26,25);
  rect(290,1222*numCuad+60,26,25);
  rect(380,1222*numCuad+60,26,25);
  rect(465,1222*numCuad+60,26,25);}
  //Cambio de color y tamaños
  //Rect grande
  if (millis ()> 38700+comienzo && millis() < 39000+comienzo) {
  fill(115,17,21);
  rect(10,1222*numCuad+60,26,25);
  rect(100,1222*numCuad+60,26,25);
  rect(195,1222*numCuad+60,26,25);
  rect(290,1222*numCuad+60,26,25);
  rect(380,1222*numCuad+60,26,25);
  rect(465,1222*numCuad+60,26,25);}
  if (millis ()> 39000+comienzo && millis() < 39500+comienzo) {
  fill(215,118,36);
  rect(10,1222*numCuad+60,26,25);
  rect(100,1222*numCuad+60,26,25);
  rect(195,1222*numCuad+60,26,25);
  rect(290,1222*numCuad+60,26,25);
  rect(380,1222*numCuad+60,26,25);
  rect(465,1222*numCuad+60,26,25);}
  if (millis ()> 39500+comienzo && millis() < 40100+comienzo) {
  fill(53,6,8);
  rect(10,1222*numCuad+60,26,25);
  rect(100,1222*numCuad+60,26,25);
  rect(195,1222*numCuad+60,26,25);
  rect(290,1222*numCuad+60,26,25);
  rect(380,1222*numCuad+60,26,25);
  rect(465,1222*numCuad+60,26,25);}
  //Rect mediano
  if (millis ()> 40100+comienzo && millis() < 40500+comienzo) {
  fill(176,140,118);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 40500+comienzo && millis() < 41000+comienzo) {
  fill(190,160,126);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  //Rect pequeño
  if (millis ()> 41000+comienzo && millis() < 41500+comienzo) {
  fill(107,36,4);
  rect(130,522*numCuad+150,26,25);
  rect(200,522*numCuad+150,26,25);
  rect(270,522*numCuad+150,26,25);
  rect(340,522*numCuad+150,26,25);}
  if (millis ()> 41500+comienzo && millis() < 41900+comienzo) {
  fill(207,166,106);
  rect(130,522*numCuad+150,26,25);
  rect(200,522*numCuad+150,26,25);
  rect(270,522*numCuad+150,26,25);
  rect(340,522*numCuad+150,26,25);}
  if (millis ()> 41900+comienzo && millis() < 42500+comienzo) {
  fill(76,43,23);
  rect(130,522*numCuad+150,26,25);
  rect(200,522*numCuad+150,26,25);
  rect(270,522*numCuad+150,26,25);
  rect(340,522*numCuad+150,26,25);}
  //Rect mediano
  if (millis ()> 42500+comienzo && millis() < 43000+comienzo) {
  fill(170,102,52);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 43000+comienzo && millis() < 43500+comienzo) {
  fill(187,157,133);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 43500+comienzo && millis() < 44000+comienzo) {
  fill(92,43,43);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 44000+comienzo && millis() < 44500+comienzo) {
  fill(65,30,2);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 44500+comienzo && millis() < 45000+comienzo) {
  fill(117,79,76);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 45000+comienzo && millis() < 45500+comienzo) {
  fill(183,161,148);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 45500+comienzo && millis() < 45800+comienzo) {
  fill(240,240,240);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}

 //Rectángulo blanco
  if (millis ()> 45800+comienzo && millis() < 46500+comienzo) {
  fill(240,240,240);
  rect(90,x-20,315,117); 
  x = x + (6 * dirX);
  if (x < 0||x > 600){
  x = 0; }}
   
 //Mini cuadrados
 //Blancos
 fill (240,240,240);
 if (millis ()> 46000+comienzo && millis() < 59000+comienzo) {
 rect (0,205,45,45);}
 if (millis ()> 47000+comienzo && millis() < 59000+comienzo) {
 rect (46,250,45,45);}
 //Negros
 fill (1,2,3);
 if (millis ()>47300+comienzo && millis() < 59000+comienzo) {
 rect (90,250,47,45);}
 if (millis ()>47600+comienzo && millis() < 59000+comienzo) {
 rect (137,205,45,45);}
 if (millis ()>47900+comienzo && millis() < 59000+comienzo) {
 rect (182,250,45,45);}
 if (millis ()>48200+comienzo && millis() < 59000+comienzo) {
 rect (227,205,45,45);}
 if (millis ()>48500+comienzo && millis() < 59000+comienzo) {
 rect (272,250,45,45);}
 if (millis ()>48800+comienzo && millis() < 59000+comienzo) {
 rect (317,205,45,45);}
 if (millis ()>49200+comienzo && millis() < 59000+comienzo) {
 rect (362,250,45,45);}
 //Blancos
 fill (240,240,240);
 if (millis ()>49600+comienzo && millis() < 59000+comienzo) {
 rect (405,250,47,45);}
 if (millis ()>50200+comienzo && millis() < 59000+comienzo) {
 rect (453,205,47,45);}
 //Blancos de los bordes
 if (millis ()>50700+comienzo && millis() < 59000+comienzo) {
 rect (46,0,47,20);
 rect (405,0,47,20);}
 if (millis ()>51500+comienzo && millis() < 59000+comienzo) {
 rect (0,20,47,45);
 rect (453,20,47,45);}
 if (millis ()>51800+comienzo && millis() < 59000+comienzo) {
 rect (46,65,47,45);
 rect (405,65,47,45);}
 if (millis ()>52100+comienzo && millis() < 59000+comienzo) {
 rect (0,110,47,45);
 rect (453,110,47,45);}
 if (millis ()>52400+comienzo && millis() < 59000+comienzo) {
 rect (46,155,50,50);
 rect (405,155,50,50);}
 if (millis ()>53000+comienzo && millis() < 59000+comienzo) {
 rect (0,295,47,45);
 rect (453,295,47,45);}
 if (millis ()>53800+comienzo && millis() < 59000+comienzo) {
 rect (46,340,47,45);
 rect (405,340,47,45);}
 if (millis ()>54200+comienzo && millis() < 59000+comienzo) {
 rect (0,385,47,45);
 rect (453,385,47,45);}
 if (millis ()>54500+comienzo && millis() < 59000+comienzo) {
 rect (46,430,47,45);
 rect (405,430,47,45);}
 if (millis ()>54800+comienzo && millis() < 59000+comienzo) {
 rect (0,475,47,45);
 rect (453,475,47,45);}
 //Negros de la mitad
 fill(1,2,3);
 if (millis ()>54800+comienzo && millis() < 59000+comienzo) {
 rect (90,0,47,20);}
 if (millis ()>55100+comienzo && millis() < 59000+comienzo) {
 rect (180,0,47,20);}
 if (millis ()>55400+comienzo && millis() < 59000+comienzo) {
 rect (270,0,47,20);}
 if (millis ()>55700+comienzo && millis() < 59000+comienzo) {
 rect (360,0,47,20);}
 //1ra línea
 if (millis ()>56000+comienzo && millis() < 59000+comienzo) {
 rect (90,65,47,45);}
 if (millis ()>56800+comienzo && millis() < 59000+comienzo) {
 rect (180,65,47,45);}
 if (millis ()>57600+comienzo && millis() < 59000+comienzo) {
 rect (270,65,47,45);}
 if (millis ()>57800+comienzo && millis() < 59000+comienzo) {
 rect (360,65,47,45);}
 //2nda línea
 if (millis ()>58000+comienzo && millis() < 59000+comienzo) {
 rect (90,155,47,48);}
 if (millis ()>58200+comienzo && millis() < 59000+comienzo) {
 rect (180,155,47,48);}
 if (millis ()>58400+comienzo && millis() < 59000+comienzo) {
 rect (270,155,47,48);}
 if (millis ()>58600+comienzo && millis() < 59000+comienzo) {
 rect (360,155,47,48);}
 //3ra línea
 if (millis ()>58800+comienzo && millis() < 62000+comienzo) {
 rect (90,340,47,45);}
 if (millis ()>59000+comienzo && millis() < 62000+comienzo) {
 rect (180,340,47,45);}
 if (millis ()>59200+comienzo && millis() < 62000+comienzo) {
 rect (270,340,47,45);}
 if (millis ()>59400+comienzo && millis() < 62000+comienzo) {
 rect (360,340,47,45);}  
 //4rta línea
 if (millis ()>59600+comienzo && millis() < 62000+comienzo) {
 rect (90,430,47,45);}
 if (millis ()>59800+comienzo && millis() < 62000+comienzo) {
 rect (180,430,47,45);}
 if (millis ()>60000+comienzo && millis() < 62000+comienzo) {
 rect (270,430,47,45);}
 if (millis ()>60200+comienzo && millis() < 62000+comienzo) {
 rect (360,430,47,45);}  
 }
 }