let botonAniadir = document.querySelectorAll("input")[0];
let botonLimpiar = document.querySelectorAll("input")[1];

botonAniadir.addEventListener("click", function () {
  
  aniadirFoto();
});

function aniadirFoto() {
  let ruta = "img/";
  let usuario = prompt("Dame una foto");
  ruta += usuario;

  if (ruta == "img/") ruta = "img/terra.jpg";
  let img = document.createElement("img");
  img.setAttribute("class", "foto");
  img.setAttribute("src", ruta);
  img.alt = "aqui va una imagen";
 
  

  let papi = document.getElementById("contenedor");
  papi.appendChild(img);
}

botonLimpiar.addEventListener("click", function () {
  let papi = document.getElementById("contenedor");
  
});
