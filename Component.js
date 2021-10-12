import Luchador from "./Luchador.js";
import Rey from "./Rey.js";
import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";

class Component {
  element;
  parentElement;
  constructor(
    parentElement = document.querySelector(".characters-list"),
    className = "div",
    tag = ".characters-list",
    { nombre, familia, edad }
  ) {
    this.element = document.querySelector(tag);
    this.element.className = className;
    this.parentElement = parentElement;
    this.parentElement.append(this.element);

    generateHTML(arrayPersonajes, nombre, familia, edad);
  }

  generateHTML(arrayPersonajes, nombre, familia, edad) {
    for (let i = 0; i < arrayPersonajes.length; i++) {
      let datosMiClase;
      //let vivo;
    }
  }
}

export default Tarjeta;
