let inputs = document.querySelectorAll("input");

inputs[0].addEventListener("input", function(){ /* input sirve para detectar cualquier cambio en el valor de input*/
    inputs[1].value = inputs[0].value;
});