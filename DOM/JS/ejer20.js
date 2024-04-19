document.addEventListener("DOMContentLoaded", function() {
    const generarBtn = document.getElementById("generar");
    const borrarViejoBtn = document.getElementById("borrarViejo");
    const borrarNuevosBtn = document.getElementById("borrarNuevos");
    const sustituirBtn = document.getElementById("sustituir");

    generarBtn.addEventListener("click", function() {       
        const nuevoParrafo = document.createElement("p");           //Creamos un nuevo parrafo 
        nuevoParrafo.textContent = "Nuevo párrafo generado.";       //Al nuevo parrafo le añadimos un texto
        nuevoParrafo.classList.add("clase2");                       //Le aplica la clase 2 al parrafo creado
        document.body.appendChild(nuevoParrafo);                    //Unimos el parrafo con su padre

        if (borrarNuevosBtn.disabled) {
            borrarNuevosBtn.disabled = false;
        }
    });

    borrarViejoBtn.addEventListener("click", function() {
        const parrafoViejo = document.querySelector("p.clase1");
        parrafoViejo.remove();
        borrarViejoBtn.disabled = true;
        sustituirBtn.disabled = true;
    });

    borrarNuevosBtn.addEventListener("click", function() {
        const parrafosNuevos = document.querySelectorAll("p.clase2");
        parrafosNuevos.forEach(function(parrafo) {
            parrafo.remove();
        });
        if (parrafosNuevos.length > 0) {
            borrarNuevosBtn.disabled = true;
            sustituirBtn.disabled = true;
        }
    });

    sustituirBtn.addEventListener("click", function() {
        const tabla = document.createElement("table");
        for (let i = 0; i < 2; i++) {
            const fila = document.createElement("tr");
            for (let j = 0; j < 2; j++) {
                const celda = document.createElement("td");
                celda.textContent = i * 2 + j + 1;
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
        const parrafoViejo = document.querySelector("p.clase1");
        parrafoViejo.replaceWith(tabla);
        
    });
});