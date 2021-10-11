import Luchador from "./Luchador.js";
import Rey from "./Rey.js";
import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";

class Tarjeta {
  constructor(arrayPersonajes) {
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
       <li>Sirve a: ${arrayPersonajes[i].boss.name}</li>`;
      }
      if (arrayPersonajes[i] instanceof Asesor) {
        datosMiClase = `<li>Asesora a: ${arrayPersonajes[i].asesorado.name}</li>`;
      }

      //vivo = arrayPersonajes[i].vivo;

      document.querySelector("#board").insertAdjacentHTML(
        "beforeend",
        `<ul class="characters-list row list-unstyled">
      <li class="character col">
        <div class="card character__card">
          <img
            src="${arrayPersonajes[i].nombre}.jpg"
            alt="Nombre y familia del personaje"
            class="character__picture card-img-top"
          />
          <div class="card-body">
            <h2 class="character__name card-title h4">${arrayPersonajes[i].nombre} y ${arrayPersonajes[i].familia}</h2>
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
      </li>
    </ul>;`
      );
    }
  }
}

export default Tarjeta;
