// Función para inicializar el autómata con células muertas.
function inicializarAutomata(tam) {
    var automata = [];
    for (var i = 0; i < tam; i++) {
        automata.push(0); // Inicialmente, todas las células están muertas (0).
    }
    return automata;
}

// Función para mostrar el estado del autómata.
function mostrarEstado(automata) {
    var estadoStr = "";
    for (var i = 0; i < automata.length; i++) {
        estadoStr += automata[i] === 1 ? '*' : '.';
    }
    console.log(estadoStr);
}

// Función para aplicar una regla a una célula en el autómata.
function aplicarRegla(automata, regla, indice) {
    var izquierda = automata[indice - 1] || 0;
    var derecha = automata[indice + 1] || 0;
    return regla[izquierda + "" + automata[indice] + "" + derecha];
}

// Función para realizar una jugada (avanzar un paso en la evolución del autómata).
function jugar(automata, regla) {
    var nuevoAutomata = [];
    for (var i = 0; i < automata.length; i++) {
        nuevoAutomata.push(aplicarRegla(automata, regla, i));
    }
    return nuevoAutomata;
}

// Función para la primera jugada (inicializar algunas células vivas).
function primeraJugada(automata, posicionesVivas) {
    for (var i = 0; i < posicionesVivas.length; i++) {
        automata[posicionesVivas[i]] = 1;
    }
    return automata;
}

// Solicitar al usuario el tamaño del autómata y el número de pasos.
var tamanoAutomata = parseInt(prompt("Ingrese el tamaño del autómata (un número entero mayor o igual a 3):"));
var numeroPasos = parseInt(prompt("Ingrese el número de pasos:"));

if (tamanoAutomata < 3 || isNaN(tamanoAutomata) || numeroPasos < 1 || isNaN(numeroPasos)) {
    console.log("Por favor, ingrese valores válidos.");
} else {
    var regla = {
        "000": 0,
        "001": 1,
        "010": 1,
        "011": 0,
        "100": 1,
        "101": 1,
        "110": 0,
        "111": 0
    };

    var automata = inicializarAutomata(tamanoAutomata);
    
    // Especificar las posiciones iniciales de células vivas (primera jugada).
    // Por ejemplo, [1, 2, 3] indica que las células en las posiciones 1, 2 y 3 estarán vivas inicialmente.
    var posicionesVivas = [tamanoAutomata >> 1];
    automata = primeraJugada(automata, posicionesVivas);
    
    console.log("Estado inicial:");
    mostrarEstado(automata);

    for (var paso = 1; paso <= numeroPasos; paso++) {
        automata = jugar(automata, regla);
        console.log("Paso " + paso + ":");
        mostrarEstado(automata);
    }
}