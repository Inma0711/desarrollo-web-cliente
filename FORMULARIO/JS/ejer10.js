 // Función para llenar la segunda lista según la selección en la primera
 function llenarSegundaLista() {
    const fabricante = document.getElementById('fabricante');
    const modelo = document.getElementById('modelo');

    modelo.innerHTML = ""; // Limpiar la lista de modelos

    if (fabricante.value === 'Intel') {
        agregarOpciones(modelo, ['HD 3000', 'HD 4000', 'IRIS 600']);
    } else if (fabricante.value === 'AMD') {
        agregarOpciones(modelo, ['RX Series 500', 'Vega Series', 'RX Series 6000']);
    } else if (fabricante.value === 'Nvidia') {
        agregarOpciones(modelo, ['GTX Serie 1000', 'GTX Serie 2000', 'GTX Serie 3000']);
    }
}

// Función para agregar opciones a una lista desplegable
function agregarOpciones(selectElement, opciones) {
    opciones.forEach(opcion => {
        const option = document.createElement('option');
        option.value = opcion;
        option.text = opcion;
        selectElement.appendChild(option);
    });

    selectElement.disabled = false; // Habilitar la lista de modelos
}

// Función para comprobar la selección en ambas listas
function comprobarSeleccion() {
    const fabricante = document.getElementById('fabricante');
    const modelo = document.getElementById('modelo');

    if (fabricante.value && modelo.value) {
        alert('Ambas listas tienen un valor seleccionado.');
    } else {
        alert('Por favor, selecciona un valor en ambas listas.');
    }
}

// Agregar eventos 'change' a la primera lista para llenar la segunda lista
document.getElementById('fabricante').addEventListener('change', llenarSegundaLista);