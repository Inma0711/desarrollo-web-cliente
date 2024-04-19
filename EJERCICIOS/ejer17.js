// Tamaño del tablero (4x5)
var filas = 4;
var columnas = 5;

// Número de minas en el tablero
var numMinas = 3;

// Crear el tablero y colocar minas y el tesoro de forma aleatoria
var tablero = [];
var minasColocadas = 0;
var tesoroFila, tesoroColumna;

for (var i = 0; i < filas; i++) {
    var fila = [];
    for (var j = 0; j < columnas; j++) {
        fila.push('*'); // Inicialmente, todas las casillas están ocultas con un *
    }
    tablero.push(fila);
}

while (minasColocadas < numMinas) {
    var filaAleatoria = Math.floor(Math.random() * filas);
    var columnaAleatoria = Math.floor(Math.random() * columnas);

    // Verificar que la casilla no tenga una mina ni sea el tesoro
    if (tablero[filaAleatoria][columnaAleatoria] !== 'M' &&
        (tesoroFila !== filaAleatoria || tesoroColumna !== columnaAleatoria)) {
        tablero[filaAleatoria][columnaAleatoria] = 'M';
        minasColocadas++;
    }
}

tesoroFila = Math.floor(Math.random() * filas);
tesoroColumna = Math.floor(Math.random() * columnas);
tablero[tesoroFila][tesoroColumna] = 'T';

// Función para mostrar el tablero en la consola
function mostrarTablero() {
    for (var i = 0; i < filas; i++) {
        var fila = '';
        for (var j = 0; j < columnas; j++) {
            fila += tablero[i][j] + ' ';
        }
        console.log(fila);
    }
}

// Función para verificar si el juego ha terminado
function juegoTerminado(fila, columna) {
    if (tablero[fila][columna] === 'M') {
        return 'Has perdido. Stepped on a mine!';
    } else if (tablero[fila][columna] === 'T') {
        return '¡Felicidades! ¡Encontraste el tesoro!';
    } else {
        return false; // El juego continúa
    }
}

console.log('¡Bienvenido al juego de búsqueda del tesoro!');

while (true) {
    mostrarTablero();

    var filaUsuario = parseInt(prompt('Ingresa la fila (1-' + filas + '):')) - 1;
    var columnaUsuario = parseInt(prompt('Ingresa la columna (1-' + columnas + '):')) - 1;

    if (filaUsuario < 0 || filaUsuario >= filas || columnaUsuario < 0 || columnaUsuario >= columnas) {
        console.log('Por favor, ingresa coordenadas válidas.');
        continue;
    }

    if (tablero[filaUsuario][columnaUsuario] !== '*') {
        console.log('Ya has revisado esta casilla. Inténtalo de nuevo.');
        continue;
    }

    var resultado = juegoTerminado(filaUsuario, columnaUsuario);
    if (resultado) {
        mostrarTablero();
        console.log(resultado);
        break;
    }

    // Comprobar si hay una mina cercana
    var minasCercanas = 0;

    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            var filaCercana = filaUsuario + i;
            var columnaCercana = columnaUsuario + j;

            if (
                filaCercana >= 0 && filaCercana < filas &&
                columnaCercana >= 0 && columnaCercana < columnas &&
                tablero[filaCercana][columnaCercana] === 'M'
            ) {
                minasCercanas++;
            }
        }
    }

    if (minasCercanas > 0) {
        console.log('¡Cuidado! Hay una mina cercana (' + minasCercanas + ').');
    } else {
        console.log('No hay minas cercanas. ¡Buena suerte!');
    }

    // Actualizar el tablero con el número de minas cercanas
    tablero[filaUsuario][columnaUsuario] = minasCercanas.toString();
}