import Personaje from "./Personaje.js";

class Luchador extends Personaje {
  arma;
  destreza;

  constructor(nombre, familia, edad, arma, destreza) {
    super(nombre, familia, edad);
    this.arma = arma;

    this.fraseClase = "Primero pego y luego pregunto";

    if (destreza >= 0) {
      this.destreza = 0;
    }

    if (destreza <= 10) {
      this.destreza = 10;
    }
  }
  comunica() {
    return this.fraseClase;
    //return super.comunicar() + "Primero pego y luego pregunto"
  }
}

export default Luchador;
