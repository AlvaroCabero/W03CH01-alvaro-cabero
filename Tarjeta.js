import Luchador from "./Luchador.js";
import Rey from "./Rey.js";
import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Component from "./Component.js";

class Tarjeta extends Component {
  personajes;
  constructor(parentElement, className, tag, personajes) {
    super(parentElement, className, tag);

    this.personajes = personajes;

    this.generateHTML(this.personajes);
  }

  generateHTML(personajes) {
    for (let i = 0; i < personajes.length; i++) {
      let datosMiClase;
      //let vivo;

      if (personajes[i] instanceof Rey) {
        datosMiClase = `<li>Años de reinado: ${personajes[i].reinado}</li>`;
      }
      if (personajes[i] instanceof Luchador) {
        datosMiClase = `<li>Arma: ${personajes[i].arma}</li>
      <li>Destreza: ${personajes[i].destreza}</li>`;
      }
      if (personajes[i] instanceof Escudero) {
        datosMiClase = `<li>Peloteo: ${personajes[i].pelotismo}</li>
       <li>Sirve a: ${
         /*arrayPersonajes.find(
           (personaje) => personaje.nombre === arrayPersonajes[i].boss
         )*/ personajes[i].boss.nombre
       }</li>`;
      }
      if (personajes[i] instanceof Asesor) {
        datosMiClase = `<li>Asesora a: ${personajes[i].asesorado.nombre}</li>`;
      }

      //vivo = arrayPersonajes[i].vivo;

      //console.log(arrayPersonajes[i].nombre.toLowerCase());

      /*document.querySelector(".characters-list").insertAdjacentHTML(
        "beforeend",*/

      this.element.insertAdjacentHTML(
        "beforeend",
        `<li class="character col">
        <div class="card character__card">
          <img
            src="/img/${nombre.toLowerCase()}.jpg"
            alt="Nombre y familia del personaje"
            class="character__picture card-img-top"
          />
          <div class="card-body">
            <h2 class="character__name card-title h4">${nombre} <span className="character__family">${familia}</span></h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${edad}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled"> ${datosMiClase}
               </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`
      );

      /*
        for (let i = 0; i < arrayPersonajes.length; i++) {
      let datosMiClase;
      //let vivo;

      if (arrayPersonajes[i] instanceof Rey) {
        datosMiClase = `<li>Años de reinado: ${arrayPersonajes[i].reinado}</li>`;
      }
      if (arrayPersonajes[i] instanceof Luchador) {
        datosMiClase = `<li>Arma: ${arrayPersonajes[i].arma}</li>
      <li>Destreza: ${arrayPersonajes[i].destreza}</li>`;
      }
      if (arrayPersonajes[i] instanceof Escudero) {
        datosMiClase = `<li>Peloteo: ${arrayPersonajes[i].pelotismo}</li>
       <li>Sirve a: ${
          arrayPersonajes[i].boss.nombre
       }</li>`;
      }
      if (arrayPersonajes[i] instanceof Asesor) {
        datosMiClase = `<li>Asesora a: ${arrayPersonajes[i].asesorado.nombre}</li>`;
      }

      //vivo = arrayPersonajes[i].vivo;

      //console.log(arrayPersonajes[i].nombre.toLowerCase());

      /*document.querySelector(".characters-list").insertAdjacentHTML(
        "beforeend",
        `<li class="character col">
        <div class="card character__card">
          <img
            src="/img/${arrayPersonajes[i].nombre.toLowerCase()}.jpg"
            alt="Nombre y familia del personaje"
            class="character__picture card-img-top"
          />
          <div class="card-body">
            <h2 class="character__name card-title h4">${
              arrayPersonajes[i].nombre
            } <span className="character__family">${
          arrayPersonajes[i].familia
        }</span></h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${arrayPersonajes[i].edad}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled"> ${datosMiClase}
               </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`
      );*/
    }
  }
}

export default Tarjeta;
