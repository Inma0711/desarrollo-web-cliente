let inputs = document.querySelectorAll("input");

inputs[2].addEventListener("click", function(){
    let optiones = document.querySelectorAll("option");
    var dolar = parseFloat(inputs[0].value);
    var euro = parseFloat(inputs[0].value);

    if(optiones[0].selected){
       var euros = dolaresAEuros(dolar);
       inputs[1].value = euros;
    }else{
        var dolars = eurosAdolares(euro);
       inputs[1].value = dolars;
    };
    
});

// Función para convertir de dólar a euro
function dolaresAEuros(dolares) {
    var tasaCambio = 0.93; // Cambia esto a la tasa de cambio actual

    // Realizar la conversión
    var euros = dolares * tasaCambio;

    // Redondear a dos decimales
    euros = Math.round(euros * 100) / 100;

    return euros;
}

// Función para convertir de euro a dolar
function eurosAdolares(euros) {
    var tasaCambio = 1.08; // Cambia esto a la tasa de cambio actual

    // Realizar la conversión
    var dolar = euros * tasaCambio;

    // Redondear a dos decimales
    dolar= Math.round(dolar * 100) / 100;

    return dolar;
}
