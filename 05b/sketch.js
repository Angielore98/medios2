var angulo = 0;
detailX = 5
detailY = 7

function setup() { 
  createCanvas(1400, 700,WEBGL);
  angleMode(DEGREES);
} 

function draw() { 
  
  //Color
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;
  
  //ambientLight(234,100,23);
  directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
  pointLight(0, 0, 200, locX, locY, 0);
  pointLight(200, 200, 0, -locX, -locY, 0);

  background(1,2,3);
  //Sol
  push();
  ambientLight(50);
  ambientMaterial(230,230,80);
  translate(250,0,-100);
  rotateY(angulo);
  sphere(170);
  pop();
  //Anillos
  //7
  translate(120, -80, -200);
  push();
  rotateX(800);
  torus(600, 2);
  pop();
  //6
  translate(20, 20, -10);
  push();
  rotateX(800);
  torus(550, 2);
  pop();
  //5
  translate(20, 0, -10);
  push();
  rotateX(800);
  torus(490, 2);
  pop();
  //4
  translate(20, 10, -10);
  push();
  rotateX(800);
  torus(450, 2);
  pop();
  //3
  translate(20, 10, -10);
  push();
  rotateX(800);
  torus(400, 2);
  pop();
  //2
  translate(20, 0, -10);
  push();
  rotateX(800);
  torus(360, 2);
  pop();
  //1
  translate(20, 0, 0);
  push();
  rotateX(800);
  torus(320, 2);
  pop();
  //8
  translate(-80, -60, 0);
  push();
  rotateX(800);
  torus(700, 2);
  pop();

  //Mercurio
  push();
  ambientLight(50);
  ambientMaterial(160,170,160);
  translate(-125,-50,-220);
  rotateY(angulo);
  sphere(30);
  pop();
  //Venus
  push();
  ambientLight(10);
  ambientMaterial(230,230,80);
  translate(130,215,320);
  rotateY(angulo);
  sphere(20);
  pop();
  //Tierra
  push();
  ambientLight(20);
  ambientMaterial(50,100,200);
  translate(-150,215,320);
  rotateY(angulo);
  sphere(45);
  pop();
  //Marte
  push();
  ambientLight(90);
  ambientMaterial(200,80,70);
  translate(-30,-145,-380);
  rotateY(angulo);
  sphere(40);
  pop();
  //Jupiter
  push();
  ambientLight(70);
  ambientMaterial(90,60,20);
  translate(282,205,390);
  rotateY(angulo);
  sphere(55);
  pop();
  //Saturno
  push();
  ambientLight(70);
  ambientMaterial(200,100,60);
  translate(-450,190,320);
  rotateY(angulo);
  sphere(50);
  pop();
  //Urano
  push();
  ambientLight(20);
  ambientMaterial(50,80,200);
  translate(548,-50,-100);
  rotateY(angulo);
  sphere(45);
  pop();
  //Neptuno
  push();
  ambientLight(20);
  ambientMaterial(50,100,200);
  translate(-695,-110,-200);
  rotateY(angulo);
  sphere(60);
  pop();
  //Anillo Neptuno
  ambientLight(20);
  ambientMaterial(50,80,200);
  translate(-695,-110,-200);
  push();
  rotateX(800);
  rotateZ(angulo);
  torus(100, 7);
  pop();
  //Anillo Saturno
  ambientLight(20);
  ambientMaterial(200,100,60);
  push();
  translate(265,290,560);
  rotateX(65);
  rotateY(25);
  rotateZ(angulo);
  torus(65, 6);
  pop();
  //Estrellas
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(-250, -50, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(10,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(250, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(10,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(-150, 100, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(10,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(150, 200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(6,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(1150, -100, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(6,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(-450, 200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(6,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(-30, -200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(6,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(-300, -300, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(6,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(1230, 500, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(6,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(1030, 600, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(12,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(800, 750, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(10,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(-300, 750, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(10,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(-400, 550, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(10,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(-600, -550, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(10,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(-600, -250, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(10,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(1300, -250, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(10,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(1400, 250, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(5,6,2)
  pop();
  push();
  ambientLight(20);
  ambientMaterial(200);
  translate(1400, -450, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  sphere(5,6,2)
  pop();
  //Rotación
  angulo = angulo +0.04;
  
}