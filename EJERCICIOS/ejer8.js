/*EJERCICIO 8
Crea una funcion llamada countBy la cual recibira dos numeros enteros positivos: X e Y.
Esta funcion debe devolver lo siguiente:

-Si alguno de los numeros es negativo devolvera un array vacio.
-Si no, devolvera con array los Y primeros multiplos de X empezando por el 1 (incluido)*/ 

function countBy(){
    let x = prompt("Introduzca un numero: ");
    let y = prompt("Introduzca otro numero: ");

    let multiplos;
    let array = [];
    if(x<0 || y<0){
        alert(array);
    }else{
        for(i = 1; i <= y; i++){
            multiplos = x*i;
            array.push(multiplos);
        }
        alert(array);
    }

}