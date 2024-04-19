/*Realiza un script que pida 10 números por teclado y que los almacene en
un array. A continuación muestra el contenido de ese array junto al índice de cada
numero (mira el dibujo).
Seguidamente el script pedirá dos posiciones a las que llamaremos inicial y final. Debes
comprobar que inicial es menor que final y que ambos números están entre 0 y 9. Si no
es así, vuelve a pedirlos.
A continuación, coloca el número de la posición inicial en la posición final, rotando el
resto de números para que no se pierda ninguno.
Al final se debe mostrar el array resultante.
Por ejemplo, para inicial = 3 y final = 7*/ 

let numeros = [];

for (let i = 0; i < 10; i++) {
    var numero = parseInt(prompt("Introduce un valor"));
    if (!isNaN(numero)) {
        numeros.push(numero); // Agregamos el número al array.
    } else {
        alert("Por favor, ingresa un número válido.");
        i--; // Restamos 1 a i para repetir la solicitud del mismo número.
    }
    
}

for (var j = 0; j < numeros.length; j++) {
    console.log("Número en el índice " + j + ": " + numeros[j]);
}

var inicial, final;
do {
    inicial = parseInt(prompt("Introduce la posición inicial (entre 0 y 9):"));
} while (isNaN(inicial) || inicial < 0 || inicial > 9);

do {
    final = parseInt(prompt("Introduce la posición final (entre 0 y 9):"));
} while (isNaN(final) || final < 0 || final > 9 || final <= inicial);

// Realizamos la rotación del array.
var numeroInicial = numeros[inicial];
for (var k = inicial; k < final; k++) {
    numeros[k] = numeros[k + 1];
}
numeros[final] = numeroInicial;

// Mostramos el array resultante.
console.log("Array después de la rotación:");
for (var l = 0; l < numeros.length; l++) {
    console.log("Número en el índice " + l + ": " + numeros[l]);
}