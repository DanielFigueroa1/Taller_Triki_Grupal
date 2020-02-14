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


function Ganar(){

  for (let i = 0; i < 3; i++) {

    //Verifica si se gana de forma vertical

    if (tablero[i][0] != 0) {

      if (tablero[i][0] == tablero[i][1] && tablero[i][1] == tablero[i][2]) {

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