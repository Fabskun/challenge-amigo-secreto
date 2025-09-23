// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

input = document.getElementById("amigo");

function agregarAmigo() {
  const nombre = input.value.trim();
  if (nombre) {
    amigos.push(nombre);
    console.log(amigos);
    limpiarNombre();
  } else {
    console.log("nombre no valido");
  }
}

function sortearAmigo() {
  if (input === "") {
    console.log("error");
  } else {
    console.log(amigo.value);
  }
}


function limpiarNombre(){
    document.getElementById("amigo").value = "";
}
