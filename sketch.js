let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],

]

let figuras = [];
let player;
let w;
let gano;
let pantalla;

function setup() {

  createCanvas(600, 600);

  pantalla = 3;

  player = 1;
 
  w = width / 3;

  for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
      

      rect(i * w, j * w, w, w);

    }

  }

}

function draw() {


  console.log(pantalla);

  switch (pantalla) {


    case 1:

      background(124,185,232);
      fill(255);
      textSize(50);
      text("Gana jugador 1", 150, 300);

      Reset();


      break;

    case 2:

      background(191,179,255);
      fill(255);
      textSize(50);
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
  
      } 
      
      else {
  
        figuras.push(new Cuadro((fila * w) + 100, (colum * w) + 100));
        tablero[fila][colum] = 2;
        player *= -1;
  
  
  
      }
  
  
  
  
    }
    }
  

}




function Ganar() {


  for (let i = 0; i < 3; i++) {

    //Vertical

    if (tablero[i][0] != 0) {

      if (tablero[i][0] == tablero[i][1] && tablero[i][1] == tablero[i][2]) {


        //text("gana jugador " + tablero[i][0], 300, 300);

        pantalla = tablero[i][0];

        gano = true;

      }



    }



  }



  for (let i = 0; i < 3; i++) {

    //Horizontal

    if (tablero[0][i] != 0) {

      if (tablero[0][i] == tablero[1][i] && tablero[1][i] == tablero[2][i]) {

        pantalla = tablero[0][i]

        gano = true;

      }



    }



  }

  for (let i = 0; i < 3; i++) {

    //Diagonal izquierda a derecha

    if (tablero[0][0] != 0) {

      if (tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2]) {


        pantalla = tablero[0][0];

        gano = true;

      }



    }


    // Diagonal derecha a izquierda

    if (tablero[2][0] != 0) {

      if (tablero[2][0] == tablero[1][1] && tablero[1][1] == tablero[0][2]) {


        pantalla = tablero[0][0];

        gano = true;

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