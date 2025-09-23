// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

let input = document.getElementById("amigo");

function agregarAmigo() {
  const nombre = input.value.trim();
  if (nombre) {
    amigos.push(nombre);
    console.log(amigos);
    limpiarNombre();
    mostrarAmigos();
  } else {
    alert("Debes ingresar un nombre")
    //console.log("nombre no valido");
  }
}

function sortearAmigo() {
  if (amigos === 0) {
    console.log("No hay amigos");
  } else {
    let indice = Math.floor(Math.random() * amigos.length);
    let nombreElegido = amigos[indice];

    document.getElementById(
      "resultado"
    ).innerHTML = `<li>${nombreElegido}</li>`;

    //console.log(`Amigos sorteado es ${nombreElegido}`);
  }
}

function limpiarNombre() {
  document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (var i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}
