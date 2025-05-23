let x//criando variavel x
let y//criando variavel y

function setup() {
  createCanvas(400, 400);
  x = random(400);//sorteando numero ate 400
  x = int(x);//transformando p/ numero inteiro
  y = random(400);
  y = int(y);
}

function draw() {
  background("gray");//fundo da tela cinza
  x = x + random(-2, 2)
  y = y + random(-2, 2)
  x = constrain(x, 0, 400)
  y = constrain(y, 0, 400)
   let distanciaX;//cateto
    let distanciaY;//cateto
    let distancia;//hipotenusa 
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
    distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
   circle(mouseX, mouseY, distancia)//com cordenadas aleatorias
  //e diametro 10
  
  if(distancia < 3) {//e posicaoX do mouse for igual a X
    text("Encontrei!", 200, 200);
    //entao mostrara o texto "encontrei"
    noLoop();}
  
  if(distancia > 200){
      fill("blue")
  circle(mouseX, mouseY, distancia)
} else if (distancia >100){
fill("purple")
circle(mouseX,mouseY,distancia)
}  else if(distancia > 50){
      fill("orange")
  circle(mouseX, mouseY, distancia)
} else if( distancia > 15){
      fill("red")
  circle(mouseX, mouseY, distancia)
}  
}