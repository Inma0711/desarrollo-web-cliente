let opciones = document.querySelectorAll('input[type="checkbox"]');

/*
opciones.forEach(e => e.addEventListener('input', function(){
    let texto = "";
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            texto += opciones[i].value + '\n';
        }
    }
    document.getElementById('resultado').value = texto;
}));
*/

for (let i = 0; i < opciones.length; i++)
{
  opciones[i].addEventListener("input", function () {
    let texto = "";
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        texto += opciones[i].value + "\n";
      }
    }
    document.getElementById("resultado").value = texto;
  });
}