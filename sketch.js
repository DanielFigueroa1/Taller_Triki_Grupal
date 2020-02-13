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