import Personaje from "./Personaje.js";

class Rey extends Personaje {
  reinado;
  constructor(nombre, familia, edad, reinado) {
    super(nombre, familia, edad);
    this.reinado = reinado;
    this.fraseClase = "Vais a morir todos hijos de mil ****S!";
  }
  comunica() {
    return this.fraseClase;
  }
}

export default Rey;
