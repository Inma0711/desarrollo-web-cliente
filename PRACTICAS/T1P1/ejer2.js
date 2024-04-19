/*2. Ejercicio 2 (2,5 puntos): Realiza un script que pida (mediante prompt) 10 números al usuario y a continuación, muestre un alert con el número de elementos que se encuentran por encima de la media y los elementos que superan el doble del valor de la media (ver ejemplo).
Hay que controlar que los valores introducidos son correctos y, en caso de que una no lo sea, volver a pedirla.
Además, no está permitido el uso de arrays en este ejercicio.
Puedes lanzar la ejecución del script mediante un botón.

Ejemplo: 1,2,3,4,5,6,7,8,10,20. Media: 6,6
Alert  Supera la media: 7, 8, 10. Supera el doble de la media: 20 */ 

function media (){
    var valor = 0;
    var suma = 0;
    var media = 0;


    for(let i = 1; i < 11; i++){
        valor = parseInt(prompt("introduce valor " + i));
        if(isNaN(valor) || valor < 0){
            alert("ERROR, vuelve a introducir valor");
            i--;
        }else{
            suma = suma + valor;
        }
       
    }

    media = suma/10;
    alert("la media es. " + media);
    

}

