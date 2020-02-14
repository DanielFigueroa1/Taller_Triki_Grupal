let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],

]

let figuras = [];

function setup() {

  createCanvas(600, 600);
 


}

function draw() {


  console.log(pantalla);

  switch (pantalla) {


    case 1:

      background(255, 0, 255);

      textSize(50);
      text("Gana jugador 1", 150, 300);

      Reset();


      break;

    case 2:

      textSize(50);

      background(255, 0, 255);
      text("Gana jugador 2", 150, 300)

      Reset();


      break;

    case 3:
  
      for (let i = 0; i < figuras.length; i++) {


        //pinta todas las figuras

        figuras[i].Pintar();

      }
  
      Ganar();

      break;


  }

}

function mousePressed() {
  if (pantalla ==3) {




  

    

    //convierte la posicion del mouse en una casilla del triki
    let fila = int(mouseX / w);
    let colum = int(mouseY / w);
  
  
  
    if (tablero[fila][colum] == 0) {
  
  
      if (player == 1) {
  
        figuras.push(new Circulo((fila * w) + 100, (colum * w) + 100));
        tablero[fila][colum] = 1;
        player *= -1;
  
      } else {
  
        figuras.push(new Cuadro((fila * w) + 100, (colum * w) + 100));
        tablero[fila][colum] = 2;
        player *= -1;
  
  
  
      }
  
  
  
  
    }
    }
  

}

function Reset() {


  for(let i=0;i<3;i++){
  
  
    for(let j=0;j<3;j++){
    
    
    
    tablero[i][j]=0;
    
    
    }
  
  }

  figuras.length = 0;

  gano = false;


}