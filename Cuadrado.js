class Cuadro extends Figura{
  
  
    constructor(x,y){
    
      super(x,y);
    
    
    
    
    }
 
 
 
 
 Pintar(){
    
      fill(191,179,255);
     rectMode(CENTER);
     rect(this.x,this.y,100,100);
    
    }
 
 
 }