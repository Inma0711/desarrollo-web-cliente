/*Pide por pantalla numeros y termina la peticion porque alcance el maximo de 9 o * */


function pedirValores(){
    let returnedArray = [];
    let contador = 1;
    let lectura = 0;

    do{
        lectura = prompt("Introduce numero: ");

        if( lectura == "*") {
            contador = 10;
        }else {
            lectura = Number(lectura);
        } 
        
        if (isNaN(lectura)){
            alert("los datos introducidos no son validos");
        }else{
            returnedArray.push(lectura);
            contador++;
        }

    }while (contador<10);
    console.log(returnedArray);
    return returnedArray;
}



function calcula(){
    let arrayEntrada = pedirValores();

    calculaResultado(arrayEntrada);

}


function calculaResultado(arrEntrada){
    let elem;
    let contador =1;

    let returnedArray = [];


    //opcion 1, si tengo la longitud
    for(var i = 0; i < arrEntrada.length; i++){
        returnedArray[i] = new Array(arrEntrada.length);
        for(j = 0; j < arrEntrada.length; j++){
            returnedArray[i][j] = arrEntrada[i]*contador;
            contador++;

        }
    }

    /*opcion 2, si no se la longitud
    for(var i = 0; i < arrEntrada.length; i++){
        returnedArray[i] = [];
        for (var j=0; j<arrEntrada.length;j++){
            returnedArray[i].push(arrEntrada[i]*contador);
            contador++;
        }
    }
    */
    /*opcion 1
    pintaResultado(returnedArray);
    opcion 2
    pintaResultadoSinParametro();
    */
    pintarResultadoMatriz(returnedArray);
}

function pintaResultado(arrMatriz){
    let elem;
    let longitud = arrMatriz.length;
    for(var i=0; i<longitud; i++){
        switch(i){
            case 0:
                elem = document.getElementById("resultado1");
                break;
            case 1:
                elem = document.getElementById("resultado2");
                break;
            case 2:
                elem = document.getElementById("resultado3");
                break;
            case 3:
                elem = document.getElementById("resultado4");
                break;
            case 4:
                elem = document.getElementById("resultado4");
                break;
            case 5:
                elem = document.getElementById("resultado5");
                break;
            case 6:
                elem = document.getElementById("resultado6");
                break;
            case 7:
                elem = document.getElementById("resultado7");
                break;
            case 8:
                elem = document.getElementById("resultado8");
                break;
        }
    }
}

function pintarResultadoMatriz(retArray){
    let elem;
    let resultado = "";

    //recorremos las filas
    for(let i =0; i < retArray[i].length; i++){
        //recorremos las columnas en la fila actual (i) que tenemos de for 
        for(let j=0; j<retArray[i].length; j++){
            document.write(retArray[i][j] + " ");
        }
        document.write("<br>");
    }
    console.log("Array: " + resultado);
}
//calcula();