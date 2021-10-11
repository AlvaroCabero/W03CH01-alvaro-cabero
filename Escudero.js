
import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";

class Escudero extends Personaje{
  boss;
  pelotismo;
  constructor(pelotismo,boss ){
  super(nombre, familia, edad);
    this.pelotismo = pelotismo;
    this.fraseClase = "Soy un loser";
   
   if (boss instanceof (Luchador)) 
   {this.boss = boss;}
     
  }
comunica(){
  return this.fraseClase;
}

export default Escudero;