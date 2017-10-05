var numCuad = 120;
var numCuad2 = 120;
var numCuad3 = 120;
var numCuad4 = 120;
var numCuad5 = 120;

function setup() { 
  createCanvas(1400, 700);} 

function draw() { 
  background(71,168,238);
  noStroke();
  fill(103,172,91);
  //América
  beginShape();
  vertex(0,0);
  vertex(500,0);
  vertex(550,50);
  vertex(370,100);
  vertex(270,200);
  vertex(270,250);
  vertex(280,270);
  vertex(335,300);
  vertex(300,320);
  vertex(240,310);
  vertex(200,230);
  vertex(120,230);
  vertex(100,270);
  vertex(150,300);
  vertex(180,290);
  vertex(170,330);
  vertex(200,340);
  vertex(210,370);
  vertex(215,375);
  vertex(250,400);
  vertex(330,370);
  vertex(450,440);
  vertex(475,470);
  vertex(570,510);
  vertex(590,570);
  vertex(550,610);
  vertex(560,640);
  vertex(510,700);
  vertex(330,700);
  vertex(320,630);
  vertex(230,580);
  vertex(210,520);
  vertex(230,420);
  vertex(180,390);
  vertex(160,350);
  vertex(40,310);
  vertex(0,210);
  endShape(CLOSE);
  
  //Europa y África
  beginShape();
  vertex(1000,0);
  vertex(890,20);
  vertex(820,60);
  vertex(830,90);
  vertex(770,100);
  vertex(760,130);
  vertex(820,140);
  vertex(900,100);
  vertex(920,130);
  vertex(960,130);
  vertex(970,100);
  vertex(1010,140);
  vertex(1030,130);
  vertex(1070,150);
  vertex(1120,160);
  vertex(1130,190);
  vertex(930,180);
  vertex(920,150);
  vertex(850,150);
  vertex(750,190);
  vertex(700,290);
  vertex(720,380);
  vertex(780,420);
  vertex(880,410);
  vertex(920,430);
  vertex(910,480);
  vertex(950,540);
  vertex(930,610);
  vertex(960,700);
  vertex(1120,700);
  vertex(1140,670);
  vertex(1140,630);
  vertex(1190,590);
  vertex(1180,490);
  vertex(1260,410);
  vertex(1270,360);
  vertex(1200,370);
  vertex(1190,330);
  vertex(1150,310);
  vertex(1120,240);
  vertex(1180,290);
  vertex(1210,330);
  vertex(1320,290);
  vertex(1310,250);
  vertex(1230,230);
  vertex(1230,200);
  vertex(1300,230);
  vertex(1400,250);
  vertex(1400,0);
  endShape(CLOSE);
  
  //Trayecto 1 (horas)
  fill(240,205,80);
  for(var numCuad = 0;numCuad < 2.3; numCuad = numCuad+0.1) {
  rect(192,109*numCuad+135,15,8);}
  //Trayecto 2 y 3 (minutos y segundos)
  for(var numCuad2 = 0;numCuad2 < 5.9; numCuad2 = numCuad2+0.1) {
  fill(215,87,60);
  rect(342,109*numCuad2+15,15,8);
  fill(240,150,30);
  rect(482,109*numCuad2+25,15,8);}
  //Trayecto 4 (día)
  for(var numCuad3 = 0;numCuad3 < 3.1; numCuad3 = numCuad3+0.1) {
  fill(130,60,17);
  rect(842,109*numCuad3+59,15,8);}
  //Trayecto 5 (mes)
  for(var numCuad4 = 0;numCuad4 < 1.2; numCuad4 = numCuad4+0.1) {
  fill(220,170,117);
  rect(992,109*numCuad4+400,15,8);}
  //Trayecto 6 (año)
  for(var numCuad5 = 0;numCuad5 < 2.0; numCuad5 = numCuad5+0.1) {
  fill(200,59,92);
  rect(1154,109*numCuad5+215,15,8);}

  //Tiempo
  var misSegundos = second();
	var misMinutos = minute();
	var misHoras = hour();
	var misDías = day();
	var misMeses = month();
	var misAños = year();
  //Map
  var anchoRectSeg = map(misSegundos,0,59,50,700);
	var anchoRectMin = map(misMinutos,0,59,50,700);
	var anchoRectHor = map(misHoras,0,23,340,585);
  var anchoRectDi = map(misDías,0,31,330,660);
	var anchoRectMes = map(misMeses,0,12,200,320);
	var anchoRectAño = map(misAños,2000,2020,290,500);
  
  //Avión horas
  fill(240,240,240);
  ellipse (198,-anchoRectHor+660,40,80);
  triangle (195,-anchoRectHor+650,160,-anchoRectHor+690,185,-anchoRectHor+690);
  triangle (210,-anchoRectHor+660,235,-anchoRectHor+690,210,-anchoRectHor+690);
  triangle (185,-anchoRectHor+690,200,-anchoRectHor+730,210,-anchoRectHor+690);
  triangle (192,-anchoRectHor+695,185,-anchoRectHor+715,195,-anchoRectHor+715);
  triangle (205,-anchoRectHor+695,215,-anchoRectHor+715,200,-anchoRectHor+715);
  //Detalles grises
  fill(178,198,182);
  triangle (180,-anchoRectHor+680,160,-anchoRectHor+690,185,-anchoRectHor+690);
  triangle (215,-anchoRectHor+680,235,-anchoRectHor+690,210,-anchoRectHor+690);
  //Detalles amarillos
  fill(248,207,75);
  triangle (207,-anchoRectHor+705,210,-anchoRectHor+715,205,-anchoRectHor+715);
  triangle (192,-anchoRectHor+705,190,-anchoRectHor+715,195,-anchoRectHor+715);
  triangle (170,-anchoRectHor+677,160,-anchoRectHor+690,170,-anchoRectHor+690);
  triangle (225,-anchoRectHor+677,235,-anchoRectHor+690,225,-anchoRectHor+690);
  ellipse (199.2,-anchoRectHor+700,3,23);
  //Ventana
  fill(117,184,290);
  beginShape();
  vertex(190,-anchoRectHor+630);
  vertex(205.5,-anchoRectHor+630);
  vertex(210.5,-anchoRectHor+642);
  vertex(185,-anchoRectHor+642);
  endShape();
  
  //Avión minutos
  fill(240,240,240);
  ellipse (348,-anchoRectMin+660,40,80);
  triangle (335,-anchoRectMin+660,310,-anchoRectMin+690,335,-anchoRectMin+690);
  triangle (360,-anchoRectMin+660,385,-anchoRectMin+690,360,-anchoRectMin+690);
  triangle (335,-anchoRectMin+690,350,-anchoRectMin+730,360,-anchoRectMin+690);
  triangle (342,-anchoRectMin+695,335,-anchoRectMin+715,345,-anchoRectMin+715);
  triangle (355,-anchoRectMin+695,365,-anchoRectMin+715,350,-anchoRectMin+715);
  //Detalles grises
  fill(178,198,182);
  triangle (330,-anchoRectMin+680,310,-anchoRectMin+690,335,-anchoRectMin+690);
  triangle (365,-anchoRectMin+680,385,-anchoRectMin+690,360,-anchoRectMin+690);
  //Detalles amarillos
  fill(248,207,75);
  triangle (357,-anchoRectMin+705,360,-anchoRectMin+715,355,-anchoRectMin+715);
  triangle (342,-anchoRectMin+705,340,-anchoRectMin+715,345,-anchoRectMin+715);
  triangle (320,-anchoRectMin+677,310,-anchoRectMin+690,320,-anchoRectMin+690);
  triangle (375,-anchoRectMin+677,385,-anchoRectMin+690,375,-anchoRectMin+690);
  ellipse (349.2,-anchoRectMin+700,3,23);
  //Ventana
  fill(117,184,290);
  beginShape();
  vertex(340,-anchoRectMin+630);
  vertex(355.5,-anchoRectMin+630);
  vertex(360.5,-anchoRectMin+642);
  vertex(335,-anchoRectMin+642);
  endShape();
  
  //Avión segundos
  fill(240,240,240);
  ellipse (488,-anchoRectSeg+660,40,80);
  triangle (475,-anchoRectSeg+660,450,-anchoRectSeg+690,475,-anchoRectSeg+690);
  triangle (500,-anchoRectSeg+660,525,-anchoRectSeg+690,500,-anchoRectSeg+690);
  triangle (475,-anchoRectSeg+690,490,-anchoRectSeg+730,500,-anchoRectSeg+690);
  triangle (482,-anchoRectSeg+695,475,-anchoRectSeg+715,485,-anchoRectSeg+715);
  triangle (495,-anchoRectSeg+695,505,-anchoRectSeg+715,490,-anchoRectSeg+715);
  //Detalles grises
  fill(178,198,182);
  triangle (470,-anchoRectSeg+680,450,-anchoRectSeg+690,475,-anchoRectSeg+690);
  triangle (505,-anchoRectSeg+680,525,-anchoRectSeg+690,500,-anchoRectSeg+690);
  //Detalles amarillos
  fill(248,207,75);
  triangle (497,-anchoRectSeg+705,500,-anchoRectSeg+715,495,-anchoRectSeg+715);
  triangle (482,-anchoRectSeg+705,480,-anchoRectSeg+715,485,-anchoRectSeg+715);
  triangle (460,-anchoRectSeg+677,450,-anchoRectSeg+690,460,-anchoRectSeg+690);
  triangle (515,-anchoRectSeg+677,525,-anchoRectSeg+690,515,-anchoRectSeg+690);
  ellipse (489.2,-anchoRectSeg+700,3,23);
  //Ventana
  fill(117,184,290);
  beginShape();
  vertex(480,-anchoRectSeg+630);
  vertex(495.5,-anchoRectSeg+630);
  vertex(500.5,-anchoRectSeg+642);
  vertex(475,-anchoRectSeg+642);
  endShape();
  
  //Avión día
  fill(240,240,240);
  ellipse (848,-anchoRectDi+660,40,80);
  triangle (835,-anchoRectDi+660,810,-anchoRectDi+690,835,-anchoRectDi+690);
  triangle (860,-anchoRectDi+660,885,-anchoRectDi+690,860,-anchoRectDi+690);
  triangle (835,-anchoRectDi+690,850,-anchoRectDi+730,860,-anchoRectDi+690);
  triangle (842,-anchoRectDi+695,835,-anchoRectDi+715,845,-anchoRectDi+715);
  triangle (855,-anchoRectDi+695,865,-anchoRectDi+715,850,-anchoRectDi+715);
  //Detalles grises
  fill(178,198,182);
  triangle (830,-anchoRectDi+680,810,-anchoRectDi+690,835,-anchoRectDi+690);
  triangle (865,-anchoRectDi+680,885,-anchoRectDi+690,860,-anchoRectDi+690);
  //Detalles amarillos
  fill(248,207,75);
  triangle (857,-anchoRectDi+705,860,-anchoRectDi+715,855,-anchoRectDi+715);
  triangle (842,-anchoRectDi+705,840,-anchoRectDi+715,845,-anchoRectDi+715);
  triangle (820,-anchoRectDi+677,810,-anchoRectDi+690,820,-anchoRectDi+690);
  triangle (875,-anchoRectDi+677,885,-anchoRectDi+690,875,-anchoRectDi+690);
  ellipse (849.2,-anchoRectDi+700,3,23);
  //Ventana
  fill(117,184,290);
  beginShape();
  vertex(840,-anchoRectDi+630);
  vertex(855.5,-anchoRectDi+630);
  vertex(860.5,-anchoRectDi+642);
  vertex(835,-anchoRectDi+642);
  endShape();
  
  //Avión mes
  fill(240,240,240);
  ellipse (998,-anchoRectMes+660,40,80);
  triangle (985,-anchoRectMes+660,960,-anchoRectMes+690,985,-anchoRectMes+690);
  triangle (1010,-anchoRectMes+660,1035,-anchoRectMes+690,1010,-anchoRectMes+690);
  triangle (985,-anchoRectMes+690,1000,-anchoRectMes+730,1010,-anchoRectMes+690);
  triangle (992,-anchoRectMes+695,985,-anchoRectMes+715,995,-anchoRectMes+715);
  triangle (1005,-anchoRectMes+695,1015,-anchoRectMes+715,1000,-anchoRectMes+715);
  //Detalles grises
  fill(178,198,182);
  triangle (980,-anchoRectMes+680,960,-anchoRectMes+690,985,-anchoRectMes+690);
  triangle (1015,-anchoRectMes+680,1035,-anchoRectMes+690,1010,-anchoRectMes+690);
  //Detalles amarillos
  fill(248,207,75);
  triangle (1007,-anchoRectMes+705,1010,-anchoRectMes+715,1005,-anchoRectMes+715);
  triangle (992,-anchoRectMes+705,990,-anchoRectMes+715,995,-anchoRectMes+715);
  triangle (970,-anchoRectMes+677,960,-anchoRectMes+690,970,-anchoRectMes+690);
  triangle (1025,-anchoRectMes+677,1035,-anchoRectMes+690,1025,-anchoRectMes+690);
  ellipse (999.2,-anchoRectMes+700,3,23);
  //Ventana
  fill(117,184,290);
  beginShape();
  vertex(990,-anchoRectMes+630);
  vertex(1005.5,-anchoRectMes+630);
  vertex(1010.5,-anchoRectMes+642);
  vertex(985,-anchoRectMes+642);
  endShape();
  
  //Avión año
  fill(240,240,240);
  ellipse (1160,-anchoRectAño+660,40,80);
  triangle (1147,-anchoRectAño+660,1122,-anchoRectAño+690,1147,-anchoRectAño+690);
  triangle (1172,-anchoRectAño+660,1197,-anchoRectAño+690,1172,-anchoRectAño+690);
  triangle (1147,-anchoRectAño+690,1162,-anchoRectAño+730,1172,-anchoRectAño+690);
  triangle (1154,-anchoRectAño+695,1147,-anchoRectAño+715,1157,-anchoRectAño+715);
  triangle (1167,-anchoRectAño+695,1177,-anchoRectAño+715,1162,-anchoRectAño+715);
  //Detalles grises
  fill(178,198,182);
  triangle (1142,-anchoRectAño+680,1122,-anchoRectAño+690,1147,-anchoRectAño+690);
  triangle (1177,-anchoRectAño+680,1197,-anchoRectAño+690,1172,-anchoRectAño+690);
  //Detalles amarillos
  fill(248,207,75);
  triangle (1169,-anchoRectAño+705,1172,-anchoRectAño+715,1167,-anchoRectAño+715);
  triangle (1154,-anchoRectAño+705,1152,-anchoRectAño+715,1157,-anchoRectAño+715);
  triangle (1132,-anchoRectAño+677,1122,-anchoRectAño+690,1132,-anchoRectAño+690);
  triangle (1187,-anchoRectAño+677,1197,-anchoRectAño+690,1187,-anchoRectAño+690);
  ellipse (1161.2,-anchoRectAño+700,3,23);
  //Ventana
  fill(117,184,290);
  beginShape();
  vertex(1152,-anchoRectAño+630);
  vertex(1167.5,-anchoRectAño+630);
  vertex(1172.5,-anchoRectAño+642);
  vertex(1147,-anchoRectAño+642);
  endShape();
}