var posX = 41;
var posY = 34;
var porX = 54.2;
var polX = 107
var poxX = 81

function setup() { 
  createCanvas(400, 540);
} 

function draw() { 
  background(216,200,170);

  //rectángulos
  fill(1,2,3);
  rect(41,502,318,8);
  noFill();
  strokeWeight(0.4);
  stroke(1,2,3);
  rect(41,26,318,8);
  
  //cuadrados
  noStroke();
  //1ra ilera
  fill(1,2,3);
  rect (posX, posY,26.5,78);
  fill(180,157,130);
  rect (posX, posY+156,26.5,78);
  rect (posX, posY+312,26.5,78);
  //2nda ilera
  rect (posX+26.5, posY+78,26.5,78);
  fill(1,2,3);
  rect (posX+26.5, posY+156,26.5,78);
  fill(180,157,130);
  rect (posX+26.5, posY+234,26.5,78);
  //3ra ilera
  rect (posX+53, posY,26.5,78);
  fill(1,2,3);
  rect (posX+53, posY+312,26.5,78);
  fill(180,157,130);
  rect (posX+53, posY+390,26.5,78);
	//4rta ilera
  fill(1,2,3);
  rect (posX+79.5, posY,26.5,78);
  fill(180,157,130);
  rect (posX+79.5, posY+156,26.5,78);
  rect (posX+79.5, posY+312,26.5,78);
  //5ta ilera
  rect (posX+106, posY,26.5,78);
  fill(1,2,3);
  rect (posX+106, posY+312,26.5,78);
  fill(180,157,130);
  rect (posX+106, posY+390,26.5,78);
  //6ta ilera
  fill(1,2,3);
  rect (posX+132.5, posY,26.5,78);
  fill(180,157,130);
  rect (posX+132.5, posY+156,26.5,78);
  rect (posX+132.5, posY+312,26.5,78);
  //7ma ilera
  rect (posX+159, posY+78,26.5,78);
  fill(1,2,3);
  rect (posX+159, posY+156,26.5,78);
  fill(180,157,130);
  rect (posX+159, posY+234,26.5,78);
  //8va ilera
  rect (posX+185.5, posY,26.5,78);
  fill(1,2,3);
  rect (posX+185.5, posY+312,26.5,78);
  fill(180,157,130);
  rect (posX+185.5, posY+390,26.5,78);
  //9na ilera
  rect (posX+212, posY+78,26.5,78);
  fill(1,2,3);
  rect (posX+212, posY+156,26.5,78);
  fill(180,157,130);
  rect (posX+212, posY+234,26.5,78);
  //10ma ilera
  fill(1,2,3);
 	rect (posX+238.5, posY,26.5,78);
  fill(180,157,130);
  rect (posX+238.5, posY+156,26.5,78);
  rect (posX+238.5, posY+312,26.5,78);
  //11va ilera
  fill(180,157,130);
  rect (posX+265, posY,26.5,78);
  fill(1,2,3);
  rect (posX+265, posY+312,26.5,78);
  fill(180,157,130);
  rect (posX+265, posY+390,26.5,78);
  //12va ilera
  rect (posX+291.5, posY+78,26.5,78);
  fill(1,2,3);
  rect (posX+291.5, posY+156,26.5,78);
  fill(180,157,130);
  rect (posX+291.5, posY+234,26.5,78);
  
  //líneas blancas
  stroke(223,220,223);
  strokeWeight(0.6);
  line(porX,34,porX,112);
  line(porX+80,34,porX+80,112);
  line(porX+133,34,porX+133,112);
  line(porX+239,34,porX+239,112);
  line(41,73,67.5,73);
  line(121,73,147.2,73);
	line(174,73,200.2,73);
  line(280,73,306.2,73);
  line(polX,347,polX,424);
  line(polX+53,347,polX+53,424);
  line(polX+133,347,polX+133,424);
  line(polX+213,347,polX+213,424);
  line(94,385,120,385);
  line(147,385,173,385);
  line(227,385,253,385);
	line(306,385,333,385);
  //líneas rojas
  stroke(197,70,40);
  line(poxX,190,poxX,268);
  line(poxX+132,190,poxX+132,268);
  line(poxX+185,190,poxX+185,268);
  line(poxX+265,190,poxX+265,268);
  line(68,230,94,230);
  line(200,230,226,230);
  line(253,230,279,230);
  line(333,230,359,230);
  line(porX,268,porX,346);
  line(porX+79,268,porX+79,346);
  line(porX+132,268,porX+132,346);
  line(porX+238,268,porX+238,346);
  line(41,307,68,307);
  line(121,307,147,307);
  line(173,307,200,307);
  line(279,307,305,307);
  //líneas negras
  stroke(1,2,3);
  line(polX,112,polX,190);
  line(polX+53,112,polX+53,190);
  line(polX+133,112,polX+133,190);
  line(polX+212,112,polX+212,190);
  line(94,151,121,151);
  line(148,151,174,151);
  line(226,151,253,151);
  line(306,151,332,151);
  line(poxX,424,poxX,502);
  line(poxX+132,424,poxX+132,502);
  line(poxX+185,424,poxX+185,502);
  line(poxX+265,424,poxX+265,502);
  line(68,464,94,464);
  line(200,464,226,464);
  line(253,464,279,464);
  line(332,464,359,464);
  
  //líneas gruesas rojas
  for(var numCuad = 0;numCuad < 0.31; numCuad = numCuad+0.06) {
  noStroke();
  fill(197,70,40);
  //1ra fila
  rect(67.5,222*numCuad+34,26.5,6.5);
  rect(200,222*numCuad+34,26.5,6.5);
  rect(253,222*numCuad+34,26.5,6.5);
  rect(332.5,222*numCuad+34,26.5,6.5);
  //2nda fila
  rect(41,222*numCuad+118,26.5,6.5);
  rect(121,222*numCuad+118,26.5,6.5);
  rect(174,222*numCuad+118,26.5,6.5); 
  rect(279.5,222*numCuad+118,26.5,6.5);
  //3ra fila
  rect(94,222*numCuad+190.5,26.5,6.5);
  rect(147,222*numCuad+190.5,26.5,6.5);
  rect(226.5,222*numCuad+190.5,26.5,6.5);
  rect(306,222*numCuad+190.5,26.5,6.5);
  //4rta fila
  rect(94,222*numCuad+268.5,26.5,6.5);
  rect(147,222*numCuad+268.5,26.5,6.5);
  rect(226.5,222*numCuad+268.5,26.5,6.5);
  rect(306,222*numCuad+268.5,26.5,6.5);
  //5ta fila
  rect(67.5,222*numCuad+350.5,26.5,6.5);
  rect(200,222*numCuad+350.5,26.5,6.5);
  rect(253,222*numCuad+350.5,26.5,6.5);
  rect(332.5,222*numCuad+350.5,26.5,6.5);
  //6ta fila
  rect(41,222*numCuad+424.3,26.5,6.5);
  rect(120.5,222*numCuad+424.3,26.5,6.5);
  rect(173.5,222*numCuad+424.3,26.5,6.5); 
  rect(279.5,222*numCuad+424.3,26.5,6.5);
  //líneas cafés
  fill(93,57,38);
  //primera ilera
  rect(41,222*numCuad+191,26.5,6.5); 
  rect(41,222*numCuad+351,26.5,6.5);
  //segunda ilera
  rect(67.5,222*numCuad+118,26.5,6.5);
  rect(67.5,222*numCuad+268,26.5,6.5);
  //tercera ilera
  rect(94,222*numCuad+34,26.5,6.5);
  rect(94,222*numCuad+424,26.5,6.5);
  //cuarta ilera
  rect(120.5,222*numCuad+191,26.5,6.5);
  rect(120.3,222*numCuad+351,26.5,6.5);
  //quinta ilera
  rect(147,222*numCuad+34.5,26.5,6.5);
  rect(147,222*numCuad+424,26.5,6.5);
  //sexta ilera
  rect(173.7,222*numCuad+191,26.5,6.5); 
  rect(173.1,222*numCuad+350.5,26.5,6.5);
  //séptima ilera
  rect(200,222*numCuad+118,26.5,6.5);
	rect(200,222*numCuad+268,26.5,6.5);
  //octava ilera
  rect(226.5,222*numCuad+34.5,26.5,6.5);
  rect(226.5,222*numCuad+424,26.5,6.5);
  //novena ilera
  rect(253,222*numCuad+118,26.5,6.5);
  rect(253,222*numCuad+268,26.5,6.5);
  //décima ilera
  rect(279.2,222*numCuad+191,26.5,6.5);
  rect(279.5,222*numCuad+351,26.5,6.5);
  //onceava ilera
  rect(306,222*numCuad+34,26.5,6.5);
  rect(306,222*numCuad+424,26.5,6.5);
  //doceava ilera
  rect(332.5,222*numCuad+118,26.5,6.5);
  rect(332.5,222*numCuad+268,26.5,6.5);
    
    
}
  
}