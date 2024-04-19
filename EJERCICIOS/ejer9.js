/*EJERCICIO 9
Crea un script que pida al usuario un numero entero positivo N mayor a 2.
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a pedir.

A continuacion, debe crearse una matriz NxN rellena con los resultados de la tabla de multiplicar N
(empezando en 1). Finalmente, muestra por consola la matriz "en forma de matriz"

Ej: Para el numero 3, el programa debe mostrar

3 6  9
12 15 18
21 24 27
*/


function ejMatriz(){
    let filas = 0;
    do{

        filas = prompt("Dime número A: ");
        filas = Number(filas);
            if ( isNaN(filas) || filas<2){
            alert("Los números introducidos no son válidos.Debe ser un número mayor a 1.");}
        }while (isNaN(filas) || filas<2);

        var returnedArray = [];
        var contador=1;
            for(var i=0; i<filas; i++) {
                returnedArray[i] = new Array(filas); // inicializo el array de arrays para i
            for(var j=0; j<filas; j++) {
                returnedArray[i][j]=filas*contador;
                contador++;
                }
            }
            console.log(returnedArray);
        }

/* 
function matrizN() {

    n = 4;
    var acum=0;
    var matriz= [];

    iniciarMatriz(n);
    
    for (let f= 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            acum+=n;
            matriz[f][c] = acum;
        }
    }

    function iniciarMatriz(n){
        for (let f= 0; f < n; f++) {
            matriz.push([]);
        }
    }
}
/*
function pulsa(){
let a = 0;
do {
    a = prompt("Introduce un numero mayor a 2: ");
    a = Number(a);
    if(isNaN(a) || a<2){
        alert("Los numeros introducidos no son validos");
    }
    }while(isNaN(a) || a<2);

let matriz = [];
for(let i = 0; i<a; i++){
    matriz[i] = new Array(a);
    for(let j=0; j<a; j++){
        matriz[i][j]=(a*(i+1))*(j+1);
    }
}
    console.log(matriz);
}

*/
