const tabla = document.querySelector("#tabla");
const primo = document.querySelector("#primo");
const factorial = document.querySelector("#factorial");
const limpiar = document.querySelector("#limpiar");
const respuesta = document.querySelector("#respuesta");

tabla.addEventListener("click", () => {
  limpiarHTML();

  generarTabla();
});

primo.addEventListener("click", () => {
  limpiarHTML();

  const numero = document.querySelector("#numero").value;

  if (!numero) {
    alert("No has ingresado un número");
    return;
  }

  const h3 = document.createElement("h3");

  if (esPrimo(Number(numero))) {
    h3.innerHTML = `El número ${numero} es primo`;
  } else {
    h3.innerHTML = `El número ${numero} no es primo`;
  }

  respuesta.appendChild(h3);
});

factorial.addEventListener("click", () => {
  limpiarHTML();

  const numero = document.querySelector("#numero").value;

  if (!numero) {
    alert("No has ingresado un número");
    return;
  }

  const h3 = document.createElement("h3");

  h3.innerHTML = `El factorial de ${numero} es ${obtenerFactorial(
    Number(numero)
  )}`;

  respuesta.appendChild(h3);
});

limpiar.addEventListener("click", () => {
  limpiarHTML();
});

function limpiarHTML() {
  while (respuesta.firstChild) {
    respuesta.removeChild(respuesta.firstChild);
  }
}

function generarTabla() {
  const h3 = document.createElement("h3");

  const numero = document.querySelector("#numero").value;

  if (!numero) {
    alert("No has ingresado un número");
    return;
  }

  for (let index = 1; index <= Number(numero); index++) {
    h3.innerHTML += `${numero} x ${index} = ${numero * index} <br>`;
  }

  respuesta.appendChild(h3);
}

function esPrimo(numero) {
  if (numero < 2) return false;

  for (let index = 2; index <= Math.ceil(numero / 2); index++) {
    if (numero % index === 0) {
      return false;
    }
  }

  return true;
}

function obtenerFactorial(numero) {
  if (numero === 0) return 1;
  return numero * obtenerFactorial(numero - 1);
}
