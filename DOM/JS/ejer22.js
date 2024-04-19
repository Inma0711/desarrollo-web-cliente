document.addEventListener("DOMContentLoaded", function () {
    let imagen = document.querySelector(".imagen");
    let fondo = document.querySelector(".fondo");

    imagen.addEventListener("click", function () {
        let imagenAmpliada = document.createElement("img");
        
        imagenAmpliada.setAttribute("src","../FOTOS/img1.jpg");
        imagenAmpliada.setAttribute("width","1240"+"px");
        imagenAmpliada.setAttribute("height","720"+"px");
        fondo.appendChild(imagenAmpliada);
        
        fondo.style.display = "flex";
        fondo.style.justifyContent = "center";
        fondo.style.alignItems = "center";
        document.body.style.overflow = "hidden";

    });
    fondo.addEventListener("click", function () {
        document.body.style.overflow = "auto";
        fondo.style.display = "none";
        let img = document.querySelectorAll("img")[1];
        fondo.removeChild(img);
    });

});