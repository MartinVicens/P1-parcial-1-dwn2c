("use strict");
// Discos:
class Albumes {
  #discos;

  constructor() {
    this.#discos = []; 
  }

  /**
   * Valida que no se repita el codigo al cargarlo mas de una vez
   * @param {number} cod parametro que sirve para validar que no se repita el codigo ya pedido en CargarCodigo
   * @returns Devuelve un 1 si es que encuentra un codigo ya ultilizado (sirve para la funcion CargarCodigo)
   */
  validarCodigo(cod) {
    for (let i of this.#discos) {
      if (cod == i.codigo) {
        return 1;
      }
    }
  }

 
  agregarDiscos(disco) {
    this.#discos.push(disco); //pusheo el objeto disco a la propiedad privada #disco en albunes
  }

  get getDiscos() { // creo un getDiscos para ver el contenido privado de discos
    return this.#discos;
  }

  contadorDiscos() {//el length me da la cantidad de discos cargados que hay
    return this.#discos.length;
  }
}

class Discos {
  nombre;
  autor;
  codigo;

  constructor(nombre, autor, codigo) {
    this.nombre = nombre;
    this.autor = autor;
    this.codigo = codigo;
  }
}

class Pistas {
  cancion;
  duracion;

  constructor(cancion, duracion) {
    this.cancion = cancion;
    this.duracion = duracion;
  }
}

//inicializo las clases que voy a ultilizar
let disco = new Discos();
let pista = new Pistas();
let albumes = new Albumes();

// Inicializo el arrayPistas
let arrayPistas = [];

// Función Cargar:
function Cargar() {
  let nombre;
  let autor;
  let codigo;
  let cancion;
  let duracion;

  disco = {}; //vacio el objeto disco

  // valido el nombre del Disco

  nombre = CargarNombre();

  // valido el autor del Disco

  autor = CargarAutor();

  // valido el codigo del Disco

  codigo = CargarCodigo();

  //paso parametros al constructor de clase new Discos (estos parametros fueron pedidos en las distintas funciones)
  disco = new Discos(nombre, autor, codigo);

  pista = {}; //vacio el objeto pistas
  arrayPistas = []; // vacio el arrayPistas

  // valido el nombre de la pista
  do {
    cancion = CargarPista();

    // valido la duracion de la pista
    duracion = CargarDuracion();

    //paso parametros al constructor de clase new Pistas (estos parametros fueron pedidos en las distintas funciones)
    pista = new Pistas(cancion, duracion);

    arrayPistas.push(pista); //Pusheo pista al arrayPistas
  } while (confirm("Desea cargar otra pista?"));

  disco.canciones = arrayPistas; //creo una propiedad canciones en disco, y digo que vale arrayPistas

  albumes.agregarDiscos(disco);
}

/**
 * Muestra el resultado del lo cargado, ya validado.
 */
function Mostrar() {
  let html = "";
  let discoMaslargo = 0;//inicializo en 0 la variable discoMaslargo
  let nombreDiscoLargo;


  for (let i of albumes.getDiscos) { //creo un for of de albunes, el cual obtiene toda la información
    let numPistas = 0; //inicializo en 0 la variable numPistas
    let duracionDisco = 0; // inicializo en 0 la variable duracionDisco
    html += `<div class="caja">`



    html += `<p><span>Nombre del disco:</span>  ${i.nombre}</p>`;
    html += `<p><span>Nombre del autor:</span>  ${i.autor}</p>`;
    html += `<p><span>Codigo:</span>  ${i.codigo}</p>`;

    html += `<ul>`;

    for (let j of i.canciones) { //creo un segundo for of que recorre la propiedad canciones que tiene los nombre las canciones y las duraciones
      numPistas++; //contador de las pistas
      duracionDisco += j.duracion; //acumulador de la duración

      html += `<li style = "color: ${
        j.duracion > 180 ? "red" : "black"
      }"><span>Canción:</span> ${j.cancion} <span>Duración:</span> ${j.duracion}seg.</li>`;
    }

    if (discoMaslargo < duracionDisco) {
      discoMaslargo = duracionDisco;
      nombreDiscoLargo = i.nombre;
    }

    html += `<p><span>Cantidad de canciones:</span> ${numPistas}</p>`;
    html += `<p><span>Duración total del disco:</span> ${duracionDisco}seg.</p>`;
    html += `<p><span>Promedio de duración del disco:</span> ${(duracionDisco / numPistas).toFixed(1)}seg.</p>`;

    html += `</ul>`;

    html +=`</div>`

  }

  html += `<p class="infoGeneral"><span>Cantidad de discos cargados:</span> ${albumes.contadorDiscos()}</p>`;
  html += `<p class="infoGeneral"><span>Disco mayor duración:</span> ${nombreDiscoLargo} <span>Duración:</span> ${discoMaslargo}seg.</p>`;


  document.getElementById("info").innerHTML = html;
}


/**
 * Al buscar por codigo anteriormente ingresado, muestra toda la información relacionada con el mismo.
 */
function BuscarCodigo() {
    let html = "";
  let buscarCodigo = parseInt(prompt("Ingrese codigo de busqueda"));

  for (let i of albumes.getDiscos) {
    html += `<div>`
    if (buscarCodigo == i.codigo) {
        html += `<p> Nombre del disco: ${i.nombre}</p>`;
        html += `<p> Nombre del autor: ${i.autor}</p>`;
        html += `<p> Codigo: ${i.codigo} </p>`;


        for (let j of i.canciones) {
          html += `<li style = "color: ${j.duracion > 180 ? "red" : "black"}">Canción: ${j.cancion} Duración: ${j.duracion}seg.</li>`;
      }
    }
  }

  html += `</div>`
  document.getElementById("info").innerHTML = html;
}

/**
 * Limpia la pantalla del navegador
 */
function Limpiar() {
    let html = "";

    document.getElementById("info").innerHTML = html;

    
}
