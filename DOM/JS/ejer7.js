let celdas = document.querySelectorAll("td");
let colores = ["red", "black", "blue", "green"];

/*
celdas.forEach((celda) =>
  celda.addEventListener("click", function () {
    switch (this.style.backgroundColor) {
      case "black":
        this.style.backgroundColor = "white";
        break;
      default:
        this.style.backgroundColor = "black";
        break;
    }
  })
);
*/

/*
celdas.forEach((celda) =>
  celda.addEventListener("click", function () {
      this.style.backgroundColor = colores[(colores.indexOf(this.style.backgroundColor) + 1) % colores.length];
  })
);
*/

// let colores = ["red", "black", "blue", "green"];
celdas.forEach((celda) =>
  celda.addEventListener("click", function () {
    let colorActual = this.style.backgroundColor;
    // Indice en el array 'colores' del color actual
    let indice = colores.indexOf(colorActual);
    // Sumamos 1 al indice
    let nuevoIndice = indice + 1;
    // Si el nuevo indice se pasa del array, volver al indice cero (0)
    if (nuevoIndice >= colores.length) {
      nuevoIndice = 0;
    }
    // Cambiar color de fondo al color sacado del array
    this.style.backgroundColor = colores[nuevoIndice];
  })
);
