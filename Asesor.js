import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Rey from "./Rey.js";
import Personaje from "./Personaje.js";

class Asesor extends Personaje {
  asesorado;
  constructor(nombre, familia, edad, asesorado) {
    super(nombre, familia, edad);
    this.asesorado = weapon;
    this.fraseClase = "No sé por qué, pero creo que voy a morir pronto";
    if (
      asesorado instanceof Rey ||
      asesorado instanceof Luchador ||
      asesorado instanceof Asesor ||
      asesorado instanceof Escudero
    ) {
      this.asesorado = asesorado;
    }
  }
  comunica() {
    return this.fraseClase;
  }
}

export default Asesor;
