import Personaje from "./Personaje.js";

class Tarjeta {
  constructor(arrayPersonajes) {
    for (let i = 0; i < arrayPersonajes.length; i++) {

      if(arrayPersonajes[i].fraseClase === "Vais a morir todos hijos de mil ****S!")
      {datosMiClase = `<li>Años de reinado: ${arrayPersonajes[i].reinado}</li>`}
      if(arrayPersonajes[i].fraseClase === "Vais a morir todos hijos de mil ****S!")
      {datosMiClase = `<li>Años de reinado: ${arrayPersonajes[i].reinado}</li>`}
       
                <li>Arma: XXX</li>
                <li>Destreza: X</li>
                <li>Peloteo: X</li>
                <li>Asesora a: X</li>
                <li>Sirve a: X</li>
      document.querySelector(".characters-list").insertAdjacentHTML(
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

characters - list;
