/*let boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    let botones = document.querySelectorAll("input");
    let texto = document.getElementsByName("textito");

    texto.innerText = botones.value;
});
*/

/*
function mostrarSeleccion() {
    const opcionesMarcadas = Array.from(document.querySelectorAll('input[name="aficion"]:checked'))
                                  .map(checkbox => checkbox.value);

    document.getElementById('resultado').value = opcionesMarcadas.join('\n');
}
*/

let boton = document.querySelector('button');

boton.addEventListener('click', function(){
    let opciones = document.querySelectorAll('input[type="checkbox"]');
    let texto = "";
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            texto += opciones[i].value + '\n';
        }
    }
    document.getElementById('resultado').value = texto;
});