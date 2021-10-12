import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";
import Rey from "./Rey.js";
import Tarjeta from "./Tarjeta.js";

const joffrey = new Rey("Joffrey", Personaje.familia.arryn, 17, 2);
const jaime = new Luchador("Jaime", Personaje.familia.stark, 30, "AK-47", 7);
const daenerys = new Luchador("Daenerys", Personaje.familia.stark, 20, "AK", 7);
const tyrion = new Asesor("Tyrion", Personaje.familia.stark, 28, daenerys);
const bronn = new Escudero("Bronn", Personaje.familia.stark, 28, jaime, 7);

const personajes = [joffrey, jaime, daenerys, tyrion, bronn];
//console.log(personajes);

const comunicados = personajes
  .filter((personaje) => personaje instanceof Luchador)
  .map((personaje) => personaje.comunica());

/*console.log(joffrey.serie);
comunicados.forEach((mensaje) => console.log(mensaje));
console.log(`Jaime vivo ? ${jaime.vivo}`);
console.log(`Tyirion vivo ? ${tyrion.vivo}`);
jaime.morir();
tyrion.morir();
console.log(`Jaime vivo ? ${jaime.vivo}`);
console.log(`Tyirion vivo ? ${tyrion.vivo}`);*/

//const tarjeta = new Tarjeta(personajes);

const tarjeta = new Tarjeta(personajes);

/*function test(arrayPersonajes) {
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
      "afterbegin",
      `<ul class="characters-list row list-unstyled">
      <li class="character col">
        <div class="card character__card">
          <img
            src="/img/${arrayPersonajes[i].nombre.toLowerCase()}.jpg"
            alt="Nombre y familia del personaje"
            class="character__picture card-img-top"
          />
          <div class="card-body">
            <h2 class="character__name card-title h4">${
              arrayPersonajes[i].nombre
            } y ${arrayPersonajes[i].familia}</h2>
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

test(personajes);*/
