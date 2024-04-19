let botonAniadir = document.querySelectorAll("input")[0];
let div = document.querySelector("div");

let tr;
let td;

botonAniadir.addEventListener("click", function () {
  aniadir();
});

function aniadir() {
  const tabla = document.createElement("table");
  tabla.setAttribute("class", "tabla");

  do {
    tr = parseInt(prompt("Dame el numero de tr"));
    td = parseInt(prompt("Dame el numero de td"));
  } while (tr > 10 || td > 10 || tr < 1 || td < 1);

  for (let i = 1; i <= tr; i++) {
    const fila = document.createElement("tr");

    for (let j = 0; j < td; j++) {
      const celda = document.createElement("td");

      celda.textContent = i;
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  div.appendChild(tabla);
}
