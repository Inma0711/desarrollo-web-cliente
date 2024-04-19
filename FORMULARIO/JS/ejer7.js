
document.getElementById("boton").addEventListener("click", function () {
    let textito = document.getElementById("texto").value.substring(0, 50);
    //console.log(textito);
    let nuevoT = document.createElement("div");
    let contenido = document.createTextNode(textito);
    nuevoT.appendChild(contenido);
    document.body.appendChild(nuevoT);
});

document.getElementById("texto").addEventListener("input", function (e) {
    //e.target.value es la victima del evento       
    let textito = e.target.value;
    //! let textito = document.getElementById('texto').value;
    //! let textito = this.value;

    //console.log(textito.length);

    // Interpretacion 1: mantener 100 primeros, permitir modificar
    /*
    if (textito.length > 100) {
        e.target.value = e.target.value.substring(0, 100);
    }
    */

    // Interpretacion 2: no permitir modificar
    if (textito.length > 100) {
        e.target.setAttribute('readonly', null);
    }
});