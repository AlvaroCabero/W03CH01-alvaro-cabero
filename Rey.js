import Personaje from "./Personaje.js";

class Rey extends Personaje{
  reinado;
  constructor(reinado ){
  super(nombre, familia, edad);
    this.reinado = reinado;
  }
comunica(){
  return this.fraseClase;
}

export default Rey;