var x = 0;
var dirX = 1;
var velX = 2;

function setup() { 
  createCanvas(500, 500);
  background(251,251,251);
} 

 function draw() { 
//Pantalla negra
 noStroke();
 fill(250,250,250);
 if (millis() > 0 && millis() < 0300) {
 rect(0,0, 500,500); }
 fill(1,2,3);
 if (millis() > 0300 && millis() <600) {
 rect(0,0,500,500);
 }
   
 //Rectángulos cayendo
 strokeWeight (2);
 stroke(1,2,3);
 if (millis() > 600 && millis() < 1300) {
 fill(220,220,220);
 rect(-1,x-1,600,17); 
 x = x + (29 * dirX);
 if (x < 0||x > height-10){
 x = (height)-10; }
 }
 //fondo negro
 if (millis() > 1300 && millis() < 15900) {
 fill (1,2,3);
 rect(0,0,500,500);} 
 
 //líneas primera vez
 stroke(1,2,3);
 strokeWeight(2);
 //1
 if (millis() > 1500 && millis() <4400) {
 fill (250,250,250);
 rect(0,0-1,72,503);
 } else if (millis() > 4400&& millis() <14000) {
 fill (210,210,210)
 rect(0,0-1,72,503);}
 //2
 if (millis() > 1900 && millis() < 5500) {
 fill (250,250,250);
 rect(71,0-1,72,503); 
 } else if (millis() > 2000&& millis() <14000) {
 fill (225,225,225)
 rect(71,0-1,72,503);}
 //3
 if (millis() > 2300 && millis() < 6300) {
 fill (250,250,250);
 rect(143,0-1,72,503);
 } else if (millis() > 2400&& millis() <14000) {
 fill (190,190,190)
 rect(143,0-1,72,503);}
 //4
 if (millis() > 2700 && millis() < 5100) {
 fill (250,250,250);
 rect(215,0-1,72,503);
 } else if (millis() > 2800&& millis() <14000) {
 fill (80,80,80)
 rect(215,0-1,72,503);}
 //5
 if (millis() > 3100 && millis() < 6700) {
 fill (250,250,250);
 rect(286,0-1,72,503);
 } else if (millis() > 3200&& millis() <14000) {
 fill (110,110,110)
 rect(286,0-1,72,503);}
 //6
 if (millis() > 3500 && millis() < 5600) {
 fill (250,250,250);
 rect(357,0-1,72,503);
 } else if (millis() > 3600&& millis() <14000) {
 fill (150,150,150)
 rect(357,0-1,72,503);}
 //7
 if (millis() > 3900 && millis() < 5400) {
 fill (250,250,250);
 rect(428,0-1,72,503);
 } else if (millis() > 4000&& millis() <14000) {
 fill (100,100,100)
 rect(428,0-1,72,503);}
   
 //2nda vez
 //1
 if (millis() > 5900 && millis() <14000) {
 fill (50,50,50);
 rect(0,0-1,72,503);}
 //2
 if (millis() > 6300 && millis() < 14000) {
 fill (70,70,70);
 rect(357,0-1,72,503);}
 //3
 if (millis() > 6700 && millis() < 14000) {
 fill (230,230,230);
 rect(143,0-1,72,503);}
 //4
 if (millis() > 7100 && millis() < 14000) {
 fill (35,35,35);
 rect(71,0-1,72,503);}
 //5
 if (millis() > 7300 && millis() < 14000) {
 fill (165,165,165);
 rect(286,0-1,72,503);}
 //6
 if (millis() > 7500 && millis() < 14000) {
 fill (130,130,130);
 rect(215,0-1,72,503);}
 //7
  if (millis() > 7600 && millis() < 14000) {
 fill (105,105,105);
 rect(428,0-1,72,503); }
 //8
 if (millis() > 8000 && millis() < 14000) {
 fill (65,65,65);
 rect(143,0-1,72,503);}
 //9
 if (millis() > 8300 && millis() < 14000) {
 fill (120,120,120);
 rect(357,0-1,72,503);}
 //10
 if (millis() > 8600 && millis() <14000) {
 fill (205,205,205);
 rect(0,0-1,72,503);}
 //11
 if (millis() > 9000 && millis() < 14000) {
 fill (95,95,95);
 rect(286,0-1,72,503);}
 //12
 if (millis() > 9100 && millis() < 14000) {
 fill (55,55,55);
 rect(357,0-1,72,503);}
 //13  
 if (millis() > 9200 && millis() <14000) {
 fill (200,200,200);
 rect(0,0-1,72,503);}
 //14
 if (millis() > 9300 && millis() < 14000) {
 fill (170,170,170);}
 //15
 if (millis() > 9700 && millis() < 14000) {
 fill (140,140,140);
 rect(357,0-1,72,503);}
  //16
 if (millis() > 9900 && millis() < 14000) {
 fill (110,110,110);
 rect(215,0-1,72,503);}
 //17
 if (millis() > 10200 && millis() < 14000) {
 fill (85,85,85);
 rect(143,0-1,72,503);}
 //18
 
 //Cambio a blanco
 if (millis() > 11000 && millis() < 14000) {
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
 if (millis() > 11900 && millis() < 14000) {
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
 if (millis() > 12800 && millis() < 14500) {
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
 if (millis() > 12900 && millis() < 14500) {
 fill(240,240,240);
 rect(86,x-20,50,47); 
 x = x + (10 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //fila 6
 if (millis() > 12900 && millis() < 14500) {
 fill(240,240,240);
 rect(366,x-20,50,47); 
 x = x + (10 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
  
 //Aparición negro
 if (millis() > 15500 && millis() < 16000) {
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
 if (millis() > 33000 && millis() < 40000) {
 fill (1,2,3);
 rect(0,0,500,500);} 
 //rect 1
 if (millis() > 16000 && millis() < 40000) {
 fill(190,190,190);
 rect(15,x-20,50,17); 
 x = x + (9 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 7
 if (millis() > 16000 && millis() < 40000) {
 fill(190,190,190);
 rect(436,x-20,50,17); 
 x = x + (11 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 2
 if (millis() > 19100 && millis() < 40000) {
 fill(190,190,190);
 rect(86,x-20,50,17); 
 x = x + (11 * dirX);
 if (x < 0||x > 600){
 x = 0; }}  
 //rect 6
 if (millis() > 19100 && millis() < 40000) {
 fill(190,190,190);
 rect(366,x-20,50,17); 
 x = x + (5 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 3
 if (millis() > 22500 && millis() < 40000) {
 fill(190,190,190);
 rect(156,x-20,50,17); 
 x = x + (6 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 5
 if (millis() > 22500 && millis() < 40000) {
 fill(190,190,190);
 rect(296,x-20,50,17); 
 x = x + (6 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 4
  if (millis() > 26000 && millis() < 40000) {
 fill(190,190,190);
 rect(226,x-20,50,17); 
 x = x + (8 * dirX);
 if (x < 0||x > 600){
 x = 0; }}

 //Cambio de color
 //1 y 7
 //rect 1
 if (millis() > 29500 && millis() < 40000) {
 fill(100,100,100);
 rect(15,x-20,50,17); 
 x = x + (9 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 7
 if (millis() > 29500 && millis() < 40000) {
 fill(100,100,100);
 rect(436,x-20,50,17); 
 x = x + (9 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //2 y 6
 //rect 2
 if (millis() > 30000 && millis() < 40000) {
 fill(80,80,80);
 rect(86,x-20,50,17); 
 x = x + (5 * dirX);
 if (x < 0||x > 600){
 x = 0; }}  
 //rect 6
 if (millis() > 30000 && millis() < 40000) {
 fill(80,80,80);
 rect(366,x-20,50,17); 
 x = x + (5 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //3 y 5
 //rect 3
 if (millis() > 31000 && millis() < 40000) {
 fill(50,50,50);
 rect(156,x-20,50,17); 
 x = x + (6 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 5
 if (millis() > 31000 && millis() < 40000) {
 fill(50,50,50);
 rect(296,x-20,50,17); 
 x = x + (6 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
 //rect 4
  if (millis() > 32000 && millis() < 40000) {
 fill(30,30,30);
 rect(226,x-20,50,17); 
 x = x + (8 * dirX);
 if (x < 0||x > 600){
 x = 0; }}
   
 //Fondo negro
 noStroke();
 fill(1,2,3);
 if (millis() > 34200 && millis() < 46000) {
 rect(0,0, 500,500); }
   
 //Cuadrados
 fill(220,220,220);
 noStroke();
 if (millis ()> 34300&& millis() < 34600) {
 rect (50,50,400,400);}
 if (millis ()> 35000 && millis() < 35600) {
 rect (70,70,360,360);}
 if (millis ()> 36000 && millis() < 36100) {
 rect (100,100,300,300);} 
 if (millis ()> 36200 && millis() < 36300) {
 rect (110,110,290,290);} 
 if (millis ()> 36400 && millis() < 36500) {
 rect (120,120,260,260);} 
 if (millis ()> 366000 && millis() < 36700) {
 rect (135,135,230,230);}
 if (millis ()> 36800 && millis() < 36900) {
 rect (145,145,200,200);}
 if (millis ()> 37000 && millis() < 37100) {
 rect (160,160,160,160);}
 if (millis ()> 37200 && millis() < 37300) {
 rect (170,170,140,140);}
 if (millis ()> 37400 && millis() < 37500) {
 rect (190,190,110,110);}
   
 //Cuadrícula
 for(var numCuad = 0;numCuad < 0.32; numCuad = numCuad+0.06) {
  noStroke();
  fill(100,100,100);
  if (millis ()> 38000&& millis() < 38300) {
  rect(130,522*numCuad+150,26,25);
  rect(200,522*numCuad+150,26,25);
  rect(270,522*numCuad+150,26,25);
  rect(340,522*numCuad+150,26,25);}
  if (millis ()> 38300&& millis() < 38500) {
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);
  }else if (millis ()> 38500&& millis() < 38700) {
  rect(10,1222*numCuad+60,26,25);
  rect(100,1222*numCuad+60,26,25);
  rect(195,1222*numCuad+60,26,25);
  rect(290,1222*numCuad+60,26,25);
  rect(380,1222*numCuad+60,26,25);
  rect(465,1222*numCuad+60,26,25);}
  //Cambio de color y tamaños
  //Rect grande
  if (millis ()> 38700&& millis() < 39000) {
  fill(115,17,21);
  rect(10,1222*numCuad+60,26,25);
  rect(100,1222*numCuad+60,26,25);
  rect(195,1222*numCuad+60,26,25);
  rect(290,1222*numCuad+60,26,25);
  rect(380,1222*numCuad+60,26,25);
  rect(465,1222*numCuad+60,26,25);}
  if (millis ()> 39000&& millis() < 39500) {
  fill(215,118,36);
  rect(10,1222*numCuad+60,26,25);
  rect(100,1222*numCuad+60,26,25);
  rect(195,1222*numCuad+60,26,25);
  rect(290,1222*numCuad+60,26,25);
  rect(380,1222*numCuad+60,26,25);
  rect(465,1222*numCuad+60,26,25);}
  if (millis ()> 39500&& millis() < 40100) {
  fill(53,6,8);
  rect(10,1222*numCuad+60,26,25);
  rect(100,1222*numCuad+60,26,25);
  rect(195,1222*numCuad+60,26,25);
  rect(290,1222*numCuad+60,26,25);
  rect(380,1222*numCuad+60,26,25);
  rect(465,1222*numCuad+60,26,25);}
  //Rect mediano
  if (millis ()> 40100&& millis() < 40500) {
  fill(176,140,118);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 40500&& millis() < 41000) {
  fill(190,160,126);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  //Rect pequeño
  if (millis ()> 41000&& millis() < 41500) {
  fill(107,36,4);
  rect(130,522*numCuad+150,26,25);
  rect(200,522*numCuad+150,26,25);
  rect(270,522*numCuad+150,26,25);
  rect(340,522*numCuad+150,26,25);}
  if (millis ()> 41500&& millis() < 41900) {
  fill(207,166,106);
  rect(130,522*numCuad+150,26,25);
  rect(200,522*numCuad+150,26,25);
  rect(270,522*numCuad+150,26,25);
  rect(340,522*numCuad+150,26,25);}
  if (millis ()> 41900&& millis() < 42500) {
  fill(76,43,23);
  rect(130,522*numCuad+150,26,25);
  rect(200,522*numCuad+150,26,25);
  rect(270,522*numCuad+150,26,25);
  rect(340,522*numCuad+150,26,25);}
  //Rect mediano
  if (millis ()> 42500&& millis() < 43000) {
  fill(170,102,52);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 43000&& millis() < 43500) {
  fill(187,157,133);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 43500&& millis() < 44000) {
  fill(92,43,43);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 44000&& millis() < 44500) {
  fill(65,30,2);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 44500&& millis() < 45000) {
  fill(117,79,76);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 45000&& millis() < 45500) {
  fill(183,161,148);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}
  if (millis ()> 45500&& millis() < 45800) {
  fill(240,240,240);
  rect(90,822*numCuad+120,26,25);
  rect(185,822*numCuad+120,26,25);
  rect(280,822*numCuad+120,26,25);
  rect(370,822*numCuad+120,26,25);}

  if (millis ()> 45800&& millis() < 46500) {
  fill(240,240,240);
  rect(90,x-20,315,117); 
  x = x + (6 * dirX);
  if (x < 0||x > 600){
  x = 0; }}
   
 //Mini cuadrados
 //Blancos
 fill (240,240,240);
 if (millis ()> 46000&& millis() < 59000) {
 rect (0,205,45,45);}
 if (millis ()> 47000&& millis() < 59000) {
 rect (46,250,45,45);}
 //negros
 fill (1,2,3);
 if (millis ()>47300&& millis() < 59000) {
 rect (90,250,47,45);}
 if (millis ()>47600&& millis() < 59000) {
 rect (137,205,45,45);}
 if (millis ()>47900&& millis() < 59000) {
 rect (182,250,45,45);}
 if (millis ()>48200&& millis() < 59000) {
 rect (227,205,45,45);}
 if (millis ()>48500&& millis() < 59000) {
 rect (272,250,45,45);}
 if (millis ()>48800&& millis() < 59000) {
 rect (317,205,45,45);}
 if (millis ()>49200&& millis() < 59000) {
 rect (362,250,45,45);}
 //Blancos
 fill (240,240,240);
 if (millis ()>49600&& millis() < 59000) {
 rect (405,250,47,45);}
 if (millis ()>50200&& millis() < 59000) {
 rect (453,205,47,45);}
 //Blancos de los bordes
 if (millis ()>50700&& millis() < 59000) {
 rect (46,0,47,20);
 rect (405,0,47,20);}
 if (millis ()>51500&& millis() < 59000) {
 rect (0,20,47,45);
 rect (453,20,47,45);}
 if (millis ()>51800&& millis() < 59000) {
 rect (46,65,47,45);
 rect (405,65,47,45);}
 if (millis ()>52100&& millis() < 59000) {
 rect (0,110,47,45);
 rect (453,110,47,45);}
 if (millis ()>52400&& millis() < 59000) {
 rect (46,155,50,50);
 rect (405,155,50,50);}
 if (millis ()>53000&& millis() < 59000) {
 rect (0,295,47,45);
 rect (453,295,47,45);}
 if (millis ()>53800&& millis() < 59000) {
 rect (46,340,47,45);
 rect (405,340,47,45);}
 if (millis ()>54200&& millis() < 59000) {
 rect (0,385,47,45);
 rect (453,385,47,45);}
 if (millis ()>54500&& millis() < 59000) {
 rect (46,430,47,45);
 rect (405,430,47,45);}
 if (millis ()>54800&& millis() < 59000) {
 rect (0,475,47,45);
 rect (453,475,47,45);}
 //Negros de la mitad
 fill(1,2,3);
 if (millis ()>54800&& millis() < 59000) {
 rect (90,0,47,20);}
 if (millis ()>55100&& millis() < 59000) {
 rect (180,0,47,20);}
 if (millis ()>55400&& millis() < 59000) {
 rect (270,0,47,20);}
 if (millis ()>55700&& millis() < 59000) {
 rect (360,0,47,20);}
 //1ra línea
 if (millis ()>56000&& millis() < 59000) {
 rect (90,65,47,45);}
 if (millis ()>56800&& millis() < 59000) {
 rect (180,65,47,45);}
 if (millis ()>57600&& millis() < 59000) {
 rect (270,65,47,45);}
 if (millis ()>57800&& millis() < 59000) {
 rect (360,65,47,45);}
 //2nda línea
 if (millis ()>58000&& millis() < 59000) {
 rect (90,155,47,48);}
 if (millis ()>58200&& millis() < 59000) {
 rect (180,155,47,48);}
 if (millis ()>58400&& millis() < 59000) {
 rect (270,155,47,48);}
 if (millis ()>58600&& millis() < 59000) {
 rect (360,155,47,48);}
 //3ra línea
 if (millis ()>58800&& millis() < 62000) {
 rect (90,340,47,45);}
 if (millis ()>59000&& millis() < 62000) {
 rect (180,340,47,45);}
 if (millis ()>59200&& millis() < 62000) {
 rect (270,340,47,45);}
 if (millis ()>59400&& millis() < 62000) {
 rect (360,340,47,45);}  
 //4rta línea
 if (millis ()>59600&& millis() < 62000) {
 rect (90,430,47,45);}
 if (millis ()>59800&& millis() < 62000) {
 rect (180,430,47,45);}
 if (millis ()>60000&& millis() < 62000) {
 rect (270,430,47,45);}
 if (millis ()>60200&& millis() < 62000) {
 rect (360,430,47,45);}  
 }
 }