class Cuadro extends Figura{
  
  
    constructor(x,y){
    
      super(x,y);
    
    
    
    
    }
 
 
 
 
 Pintar(){
    
    fill(240);
     rectMode(CENTER);
     rect(this.x,this.y,100,100);
    
    }
 
 
 }