class Circulo extends Figura {
  
    constructor (x,y){
    
    super(x,y);
    
    }
    
    
  
    Pintar(){
    
      
      fill(124,185,232);
      
      ellipse(this.x,this.y,100,100);
    
    }
  
  
  
  
  }