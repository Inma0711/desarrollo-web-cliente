let divIzq = document.getElementById("ladoIzq");
let divDer = document.getElementById("ladoDer");
let divSalida = document.getElementById("salida");

let botonGenerar = document.querySelectorAll("input")[0];
let botonComparar = document.querySelectorAll("input")[1];

let timer;
var num1 = 0;
var num2 = 0;

botonGenerar.addEventListener("click", function () {
  timer = setInterval("generar()", 500);
});

function generar() {
  num1 = divIzq.textContent = parseInt(Math.random() * 50 + 1);
  num2 = divDer.textContent = parseInt(Math.random() * 50 + 1);
  botonGenerar.disabled = true;
  botonComparar.disabled = false;
  divSalida.textContent = "";
}

botonComparar.addEventListener("click", function () {
  comparar();
  clearInterval(timer);
});

function comparar() {
  if (num1 > num2) {
    divSalida.textContent = num1;
  } else {
    divSalida.textContent = num2;
  }

  botonGenerar.disabled = false;
  botonComparar.disabled = true;
}
