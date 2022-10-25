/**
 * Pide nombre del disco y lo valida
 * @returns Devuelve el nombre ya validado
 */
function CargarNombre() {
  let nombre;

  do {
    nombre = prompt("Ingrese el nombre del disco");
    var flagnombre = true;
    if (nombre === "") {
      alert("No ingreso ningún dato");
      flagnombre = false;
    } else {
      flagnombre = true;
    }
  } while (!flagnombre);

  return nombre;
}


/**
 * Pide autor o banda del disco y lo valida
 * @returns Devuelve el autor o banda ya validado
 */
function CargarAutor() {
  let autor;

  do {
    autor = prompt("Ingrese autor o banda del disco");
    var flagautor = true;
    if (autor === "") {
      alert("No ingreso ningún dato");
      flagautor = false;
    } else {
      flagautor = true;
    }
  } while (!flagautor);

  return autor;
}


/**
 * Pide codigo del disco y lo valida (debe ser un number)
 * @returns Devuelve el codigo ya validado
 */
function CargarCodigo() {
  let codigo;
  do {
    codigo = parseInt(prompt("Ingrese el codigo del disco. Recuerde que va de 1 a 999 inclucive"));

    let validarNum = albumes.validarCodigo(codigo); //validamos que el codigo no se repita, traemos  esa validacion desde la funcion ValidarCodigo

    var flagcodigo = true;
    if (validarNum == 1) {
      alert("codigo ya utilizado");
      flagcodigo = false;
    } else {
      if (isNaN(codigo) || codigo < 1 || codigo > 999) {
        alert("Codigo incorrecto (Recuerde que va de 1 a 999 inclucive)");
        flagcodigo = false;
      } else {
        flagcodigo = true;
      }
    }
  } while (!flagcodigo);

  return codigo;
}


/**
 * Pide cancion y valida la misma
 * @returns Devuelve la canción ya validada
 */
function CargarPista() {
  let cancion;
  do {
    cancion = prompt("Ingrese el nombre de la pista");
    var flagcancion = true;
    if (cancion === "") {
      alert("No ingreso ninguna pista");
      flagcancion = false;
    } else {
      flagcancion = true;
    }
  } while (!flagcancion);
  return cancion;
}


/**
 * Pide duración de la canción y valida (debe ser un number)
 * @returns Devuelve la duración
 */
function CargarDuracion() {
  let duracion;
  do {
    duracion = parseInt(prompt("Ingrese la duracion de la pista, la misma en segundos. Recuerde que va de 1 a 7200 inclusive"));
    var flagduracion = true;
    if (isNaN(duracion) || duracion < 1 || duracion > 7200) {
      alert("la duracion de la pista debe ir de 1 a 7200 segundos inclusive)");
      flagduracion = false;
    } else {
      flagduracion = true;
    }
  } while (!flagduracion);

  return duracion;
}
