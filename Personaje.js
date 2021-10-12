class Personaje {
  nombre;
  static familia = {
    greyjoy: "casa greyjoy",
    targaryen: "casa Tagaryen",
    stark: "casa Stark",
    arryn: "casa arryn",
  };
  edad;
  vivo = true;
  fraseClase = "Solo sé que no soy nadie";
  serie = "GoT";

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }
  comunica() {
    return this.fraseClase;
  }
  morir() {
    this.vivo = false;
  }
}

export default Personaje;
