/*1. Ejercicio 1 (1 punto).  Desarrolla un script que, al pulsar el botón correspondiente, pida al usuario una cantidad en gramos y muestre mediante un alert su equivalente en kilogramos según el formato del siguiente ejemplo:
1000 gramo/s equivalen a 1 kilogramo/s

Controla que la cantidad a convertir sea mayor a 0 y sea numérica. Si no es así, vuelve a pedir esa cantidad.
*/


function kg(){

var gramos;

do{
    gramos = prompt("introduce una cantidad");
    if(isNaN(gramos) || gramos<0){
       alert("Vuelve a introducir");
    }
}while(isNaN(gramos) || gramos < 0);

var conversion = gramos/1000;
alert(gramos + " gramos equivale a  " + conversion + " kg");

return(alert);
}
