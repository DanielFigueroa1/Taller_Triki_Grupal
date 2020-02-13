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