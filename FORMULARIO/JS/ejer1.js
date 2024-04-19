let inputs = document.querySelectorAll('input');

// inputs[2].addEventListener("click", function(){
//     inputs[1].value = inputs[0].value;
// });

inputs[2].addEventListener("click", function(){
    let textito = inputs[0].value;
    inputs[1].value = textito;
});