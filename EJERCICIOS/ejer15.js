/*Un restaurante nos ha encargado una aplicación para colocar a los clientes
en sus mesas. En una mesa se pueden sentar de 0 (mesa vacía) a 4 comensales (mesa
llena).
El funcionamiento es el siguiente:
Cuando llega un cliente se le pregunta cuántos son. Como el programa no está
preparado para colocar a grupos mayores a 4, si un cliente solicita una mesa con mas
comensales (pej, 6), el programa dará el mensaje “Lo siento, no admitimos grupos de 6,
haga grupos de 4 personas como máximo e intente de nuevo” y volverá a preguntar.
Para cada grupo nuevo que llega, se busca siempre la primera mesa libre (con 0
personas). Si no quedan mesas libres, se busca una donde haya hueco para todo el grupo
(por ejemplo si el grupo es de dos personas, se podrá colocar en mesas donde haya una
o dos personas).

Cada vez que se sientan nuevos clientes se debe mostrar el estado de las mesas.
Los grupos no se pueden romper aunque haya huecos sueltos suficientes.
A tener en cuenta:
• El programa comienza pidiendo el numero de mesas que tiene el restaurante.
• Inicialmente, las mesas se cargan con valores aleatorios entre 0 y 4 y mostrará
por pantalla como quedan las mesas inicialmente.
• El programa seguirá pidiendo comensales hasta que se introduzca un valor
negativo
*/ 


//Generador de numero aleatorio
function numAle(){
    return Math.floor(Math.random()*5);
}


//Para ver cuantas mesas  habra
let numMesas = parseInt(prompt("Introduce el numero de mesas del restaurante"));


//Para generar en cada mesa un numero de comensales ya predeterminado
var mesas = [];
for (var i = 0; i < numMesas; i++) {
    mesas.push(numAle());
}

// Función para mostrar el estado de las mesas.
function mostrarEstadoDeMesas() {
    console.log("Estado de las mesas: " + mesas.join(" "));
}

// Ciclo principal del programa que solicita comensales hasta que se ingresa un valor negativo.
while (true) {
    var numComensales = parseInt(prompt("¿Cuántos comensales son? (Ingrese un valor negativo para salir)"));

    if (numComensales < 0) {
        break; // Salir del ciclo si se ingresa un valor negativo.
    }

    if (numComensales > 4) {
        console.log("Lo siento, no admitimos grupos de " + numComensales + " personas. Haga grupos de 4 personas como máximo e intente de nuevo.");
    } else {
        var mesaEncontrada = false;
        for (var j = 0; j < mesas.length; j++) {
            if (mesas[j] === 0 || (mesas[j] + numComensales <= 4)) {
                mesas[j] += numComensales;
                console.log("Por favor, siéntese en la mesa " + (j + 1));
                mesaEncontrada = true;
                break;
            }
        }

        if (!mesaEncontrada) {
            console.log("Lo siento, no hay mesas disponibles para acomodar a " + numComensales + " personas.");
        }

        mostrarEstadoDeMesas();
    }
}

console.log("¡Gracias por visitar el restaurante!");